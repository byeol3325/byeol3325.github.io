---
title:  "병렬화, 병렬 프로그래밍 #3" 
categories: research
tag: [python, studying, programming, parallel, 병렬화, 진행중]
date: 2024-09-04
toc: true
toc_sticky: true
toc_label: 목차
use_math: true
sidebar:
    nav: "docs"
last_modified_at: 2024-09-04 =
---

**병렬화**는 컴퓨터 공학에서 매우 중요한 기법으로 여러 작업을 동시에 처리하여 계산 속도를 높이는 기법입니다. 프로젝트를 진행하며 병렬화에 대해 공부해 나갔고 이를 기록하는 김에 글을 작성하게 됐습니다. 이번에는 최적화하는 프로젝트 도중에 알게된 사실을 정리하고자 글을 쓰게 됐습니다.

# 병렬화(parallelism)란?
병렬화(parallelism)란 **여러 작업을 동시에 처리하여 계산 속도를 높이는 기법**입니다. 컴퓨터 과학에서 병렬화는 크게 2가지 방식으로 구현될 수 있습니다.

참고 : [Windows-BALM](https://github.com/byeol3325/Windows-BALM-Enhanced-Time-Performance)

제 깃허브에 올린 **BALM을 윈도우 환경**에서 돌아가게 한 코드이며 병렬화 코딩을 통해 최적화를 시켰으며 **처리 시간 성능을 원본 코드 대비 30퍼정도 향상**시켰습니다. 참고하시면 좋을 거 같습니다. 
해당 코드 특성상 win size 마다 thread를 할당하는데에 시간이 많이 걸려, win size가 thread 수에 비해 3배 이상 크지 않으면 할당하는 데 시간이 좀 더 오래 걸리는 **오버 헤드** 현상이 발생하였다. 이를 줄이기 위해 **thread를 재사용**하는 방식으로 코드를 개선했습니다.

# Thread 재사용 하는 방법
위와 같은 이유로 같은 수의 thread를 **계속 선언**하고 **할당**하고 **지우고** 하는데에는 시간이 많이 걸리게 되므로 **thread를 처음에 선언**하고 그 뒤로는 선언한 thread에 함수만 넣고 **재사용하여 작동**하도록 함수를 짜게 하면 시간을 좀 더 줄일 수 있게 되었다.

프로젝트 코드를 올릴 순 없지만 알려드리면 속도면에서 약 5~10 퍼센트 정도 향상하게 되었다.

```python
import threading
import time

def worker(number):
    print(f"Thread {number} 시작")
    time.sleep(1)  # 작업이 1초 동안 진행된다고 가정
    print(f"Thread {number} 완료")

def run_with_new_threads(num_threads):
    threads = []

    for i in range(num_threads):
        t = threading.Thread(target=worker, args=(i,))
        threads.append(t)
        t.start()

    for t in threads:
        t.join()

if __name__ == "__main__":
    start_time = time.time()
    for _ in range(10): # 10번 호출. thread 선언이 10번 더 들어가게 됨
        run_with_new_threads(5)
    end_time = time.time()

print(f"새로운 thread를 매번 사용하는 경우 소요 시간: {end_time - start_time:.2f} 초")
```


```python
import threading
import time
from queue import Queue

def worker_reuse(queue):
    while True:
        number = queue.get()
        if number is None:
            break
        print(f"Reusable Thread 작업 {number} 시작")
        time.sleep(1)
        print(f"Reusable Thread 작업 {number} 완료")
        queue.task_done()

def run_with_reusable_threads(num_threads):
    queue = Queue()
    threads = []

    # Thread 재사용을 위해 미리 생성
    for _ in range(num_threads):
        t = threading.Thread(target=worker_reuse, args=(queue,))
        t.start()
        threads.append(t)

    return queue, threads

if __name__ == "__main__":
    num_threads = 5
    queue, threads = run_with_reusable_threads(num_threads)
    
    start_time = time.time()
    for _ in range(10):  # 10번 호출. thread 재사용
        # Queue에 작업을 추가
        for i in range(num_threads):
            queue.put(i)

        # 모든 작업이 완료될 때까지 대기
        queue.join()

    # 종료 신호를 보내서 thread 종료
    for _ in range(num_threads):
        queue.put(None)

    for t in threads:
        t.join()

    end_time = time.time()

    print(f"thread를 재사용하는 경우 소요 시간: {end_time - start_time:.2f} 초")
```
---
title:  "[프로그래머스 Lv3] 상담원 인원" 

categories: coding
tag: [python, coding, programmers]
toc: true
date: 2024-08-06
last_modified_at: 2024-08-06
---

자료구조를 제외한 라이브러리 최대한 사용하지 않고 문제풀기 (필요하면 직접 코딩)

# 문제
[프로그래머스 상담원 인원](https://school.programmers.co.kr/learn/courses/30/lessons/214288)

# 문제 풀이 및 회고
참가자들이 상담을 받게 되는데 멘토 인원을 적절히 배치하여 참가자들이 상담을 받기까지 기다린 시간을 모두 합한 값의 최솟값을 return 하도록 하는 문제이다.
문제의 핵심은 문제에도 두꺼운 글씨체로 설명되어 있지만 "각 유형별로 멘토 인원이 적어도 1명 이상", "상담 중이 아닌 멘토와 상담 시작", "모두 상담 중이라면 참가자는 자신의 차례가 올 때까지 기다립니다. 참가자가 기다린 시간은 참가자가 상담 요청했을 때부터 멘토와 상담을 시작할 때까지의 시간", "먼저 상담 요청한 참가자가 우선" 입니다.

제한사항을 참고하였을 때, backtracking을 사용하여도 시간복잡도가 넘지 않을 것으로 생각되어 backtracking으로 풀게 되었습니다. 

# 코드(python)

```python
# 멘토 n명. 1~k번 상담 유형. 각 멘토는 k개 상담 유형 중 하나만 담당
# 멘토는 자신이 담당하는 유형의 상담만 가능. 다른 유형의 상담은 불가능
# 멘토는 참가자 한명과 상담 가능. 상담 시간은 참가자가 요청한 시간만큼

# 참가자가 상담 요청하면
# 1. 상담을 원하는 참가자가 상담 요청했을 때, 참가자의 상담 유형을 담당하는 멘토 중
#    상담 중이 아닌 멘토와 상담 시작.
# 2. 모든 멘토가 상담 중이라면, 자신의 차례가 올 때까지 기다리기. 참가자가 기다린 시간은
#    상담 요청했을 때부터 멘토와 상담을 시작할 때까지의 시간.
# 3. 모든 멘토는 상담이 끝났을 때 자신의 상담 유형의 상담을 받기 위해 기다리고 있는
#    참가자가 있으면 즉시 상담을 시작. 이때, 먼저 상담 요청한 참가자가 우선.

# 참가자의 상담 요청 정보가 주어질 때, 참가자가 상담을 요청했을 때부터 상담을 시작하기까지
# '기다린 시간의 합의 최소'가 되도록 각 상담 유형별로 멘토 인원을 정하려 합니다.
# 각 유형별로 멘토 인원 적어도 한명 이상이어야함.
import heapq as hq

def solve(n: int, waiting: list) -> int:
    """
    waiting 을 n명의 상담원으로 최소 대기시간
    """
    answer = 0
    if n >= len(waiting): # 상담원 수 >= 기다리는 사람 수
        return answer
    
    mento = [0]*n
    for one in waiting:
        mento_endtime = hq.heappop(mento)
        
        if mento_endtime > one[0]: # 기다렸다면 기다린 시간 추가
            answer += (mento_endtime - one[0])
            hq.heappush(mento, mento_endtime + one[1]) # 끝난 시간은 heap에 넣어주기
        else:
            hq.heappush(mento, one[0] + one[1]) # 끝난 시간은 heap에 넣어주기
    return answer

def backtracking_permutations(k: int, mento_list: list):
    result = []
    n = len(mento_list)
    distribution = mento_list.copy()
    indices = [i for i in range(n) if mento_list[i] != 0] # 상담 유형 있는 곳만 채우기
    
    def backtrack(idx: int, remaining_mentos: int):
        if idx == len(indices) - 1:
            distribution[indices[idx]] += remaining_mentos
            result.append(distribution.copy())
            distribution[indices[idx]] -= remaining_mentos
            return
        
        for i in range(remaining_mentos + 1):
            distribution[indices[idx]] += i
            backtrack(idx + 1, remaining_mentos - i)
            distribution[indices[idx]] -= i
    
    backtrack(0, k)
    
    return result
    
min_time = float("inf")
def solution(k: int, n: int, reqs: list) -> int:
    global min_time
    
    answer = 0
    
    waiting_queue = [[] for _ in range(k+1)] # k번째 waiting
    for req in reqs:
        waiting_queue[req[2]].append(req[:2])
    
    # backtracking을 위한 초기값 설정
    remaining_mentos = n - k
    mento_list = [1] * (k+1) # 각 유형별로 멘토 인원이 적어도 한명 이상이어야함
    mento_list[0] = 0
    
    mento_lists = backtracking_permutations(remaining_mentos, mento_list) # 모든 가능한 경우의 수
    print(mento_lists)
    
    for ml in mento_lists: # [0, 1, 3, 2] ...
        waiting_time = 0
        for i, m in enumerate(ml): # 1, 3, ...
            if m == 0:
                continue
            waiting_time += solve(m, waiting_queue[i])
            
            if waiting_time > min_time: # 이미 시간이 길면 다음 mento_list 확인
                break
        min_time = min(min_time, waiting_time)
    
    
    return min_time
```


# 테스트 결과
| 테스트 번호 | 결과  | 실행 시간  | 메모리 사용량 |
|-------------|-------|-------------|---------------|
| 테스트 1    | 통과  | 0.04ms      | 10.2MB        |
| 테스트 2    | 통과  | 0.06ms      | 10.4MB        |
| 테스트 3    | 통과  | 0.03ms      | 10.3MB        |
| 테스트 4    | 통과  | 0.06ms      | 10.3MB        |
| 테스트 5    | 통과  | 0.38ms      | 10.4MB        |
| 테스트 6    | 통과  | 1.23ms      | 10.3MB        |
| 테스트 7    | 통과  | 1.18ms      | 10.3MB        |
| 테스트 8    | 통과  | 0.20ms      | 10.3MB        |
| 테스트 9    | 통과  | 393.43ms    | 10.7MB        |
| 테스트 10   | 통과  | 311.83ms    | 10.8MB        |
| 테스트 11   | 통과  | 243.02ms    | 10.8MB        |
| 테스트 12   | 통과  | 258.99ms    | 10.8MB        |
| 테스트 13   | 통과  | 215.95ms    | 10.7MB        |
| 테스트 14   | 통과  | 283.59ms    | 10.7MB        |
| 테스트 15   | 통과  | 242.07ms    | 10.7MB        |
| 테스트 16   | 통과  | 194.41ms    | 10.8MB        |
| 테스트 17   | 통과  | 268.69ms    | 10.8MB        |
| 테스트 18   | 통과  | 232.89ms    | 10.5MB        |
| 테스트 19   | 통과  | 259.38ms    | 10.7MB        |
| 테스트 20   | 통과  | 246.09ms    | 10.7MB        |
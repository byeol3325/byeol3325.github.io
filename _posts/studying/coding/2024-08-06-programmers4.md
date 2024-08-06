---
title:  "[프로그래머스 Lv3] 등대" 

categories: coding
tag: [python, coding, programmers, 다시봐야함]
toc: true
date: 2024-08-06
last_modified_at: 2024-08-06
---

자료구조를 제외한 라이브러리 최대한 사용하지 않고 문제풀기 (필요하면 직접 코딩)

# 문제
[프로그래머스 등대](https://school.programmers.co.kr/learn/courses/30/lessons/133500)

# 문제 풀이 및 회고
최소 등대만을 이용해서 모든 항구가 서로 이동할 수 있게 만드는 문제이다. dfs로 쉽게 풀릴 줄 알았는데 안 풀려서 당황했었고 greedy로 어떠한 조건에 맞게 풀려했는데 실패했다.
그래서 dp와 dfs를 활용해서 문제를 풀어보았지만 set을 써서 remove를 써도 list를 써도 계속 시간 초과가 나고 제대로 짠 거 같은데 안 돼서 결국 힌트를 보게 되었는데 sys.recursionlimit만 적어주니 풀리게 되었다
다른 사람들 풀이에서 recursionlimit이 없이도 풀리는데 없이 푸는 걸 더 연습해보아야겠다 다시 봐야할 문제로 일단 체크했고 한달내로 다시 풀어봐야겠다

# 코드(python)
```python

from collections import defaultdict
import sys
sys.setrecursionlimit(10**6)  # 재귀 깊이 제한 늘리기

def make_graph(lighthouse: list) -> dict:
    graph = defaultdict(lambda:set())
    for u,v in lighthouse:
        graph[u-1].add(v-1) # 1번부터 시작이라 -1 해줬음
        graph[v-1].add(u-1)
    return graph

def solution(n: int, lighthouse:list) -> int:
    answer = 0
    graph = make_graph(lighthouse)
    
    visited = [0] * n
    def dfs(u):
        visited[u] = 1
        on, off = 1, 0
        
        for v in graph[u]:
            if visited[v] == 0:
                on_v, off_v = dfs(v) 
                on += min(on_v, off_v) # s 등대가 켜지면 연결된 게 켜지든 안 켜지든 상관 없음
                off += on_v # s가 켜진게 아니라면 연결된게 켜져있어야함
        
        return on, off
    
    return min(dfs(0))
```

# 테스트 결과
| 테스트 번호 | 결과  | 실행 시간  | 메모리 사용량 |
|-------------|-------|-------------|---------------|
| 테스트 1    | 통과  | 244.94ms    | 67.9MB        |
| 테스트 2    | 통과  | 219.92ms    | 68.3MB        |
| 테스트 3    | 통과  | 258.45ms    | 67.7MB        |
| 테스트 4    | 통과  | 199.91ms    | 67.9MB        |
| 테스트 5    | 통과  | 221.98ms    | 66.1MB        |
| 테스트 6    | 통과  | 227.69ms    | 66.9MB        |
| 테스트 7    | 통과  | 214.49ms    | 67.4MB        |
| 테스트 8    | 통과  | 197.70ms    | 63.7MB        |
| 테스트 9    | 통과  | 316.81ms    | 72.7MB        |
| 테스트 10   | 통과  | 268.18ms    | 62.9MB        |
| 테스트 11   | 통과  | 151.93ms    | 37.4MB        |
| 테스트 12   | 통과  | 77.05ms     | 26.1MB        |
| 테스트 13   | 통과  | 24.81ms     | 14.9MB        |
| 테스트 14   | 통과  | 0.01ms      | 10.2MB        |
| 테스트 15   | 통과  | 1.30ms      | 10.7MB        |
| 테스트 16   | 통과  | 7.37ms      | 12.6MB        |
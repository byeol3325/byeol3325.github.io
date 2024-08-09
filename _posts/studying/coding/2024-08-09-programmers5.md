---
title:  "[프로그래머스] [Lv4] 도둑질" 

categories: coding
tag: [python, coding, programmers]
toc: true
date: 2024-08-09
last_modified_at: 2024-08-09
---

자료구조를 제외한 라이브러리 최대한 사용하지 않고 문제풀기 (필요하면 직접 코딩)


# 문제
[프로그래머스 도둑질](https://school.programmers.co.kr/learn/courses/30/lessons/42897)

# 문제 풀이 및 회고
**첫 집이 문제**입니다. 첫 집만 아니면 그냥 바로 dp 하나로 해결가능합니다.

# 코드(python)
```python
def solution(money):
    n = len(money)
    
    if n == 1:
        return money[0]
    
    # 첫 번째 집을 터는 경우
    dp1 = [0] * n
    dp1[0] = money[0]
    dp1[1] = max(money[0], money[1])
    for i in range(2, n-1):  # 마지막 집은 포함하지 않음
        dp1[i] = max(dp1[i-1], dp1[i-2] + money[i])
        
    # 첫 번째 집을 털지 않는 경우
    dp2 = [0] * n
    dp2[1] = money[1]
    for i in range(2, n):
        dp2[i] = max(dp2[i-1], dp2[i-2] + money[i])
        
    # 두 경우 중 최댓값을 반환
    return max(dp1[n-2], dp2[n-1])
```

```python
def solution(money):
    answer = 0
    n = len(money)
    
    if n == 1:
        return money[0]
    
    # 첫 집 털기 => 마지막 집은 털지 않기
    DP = [[0, 0] for _ in range(n-1)]
    DP[0][1] = money[0]
    for i in range(1, n-1):
        DP[i][0] = max(DP[i-1])
        DP[i][1] = DP[i-1][0] + money[i]
    
    # 첫 집 안 털었음 => 마지막 집은 털지 않기
    DP_0 = [[0, 0] for _ in range(n)]
    for i in range(1, n):
        DP_0[i][0] = max(DP_0[i-1])
        DP_0[i][1] = DP_0[i-1][0] + money[i]
    
    return max(max(DP[-1]), max(DP_0[-1]))
```
밑에 코드가 좀 더 직관적으로 이해하기 편할까 넣어뒀습니다.

## 테스트 결과


| 테스트 번호 | 결과  | 실행 시간  | 메모리 사용량 |
|-------------|-------|------------|---------------|
| 테스트 1    | 통과  | 0.21ms     | 10.2MB        |
| 테스트 2    | 통과  | 0.59ms     | 10.1MB        |
| 테스트 3    | 통과  | 0.60ms     | 10.3MB        |
| 테스트 4    | 통과  | 0.03ms     | 10.3MB        |
| 테스트 5    | 통과  | 0.16ms     | 10.2MB        |
| 테스트 6    | 통과  | 0.36ms     | 10.2MB        |
| 테스트 7    | 통과  | 0.27ms     | 10.2MB        |
| 테스트 8    | 통과  | 0.18ms     | 10.1MB        |
| 테스트 9    | 통과  | 0.99ms     | 10MB          |
| 테스트 10   | 통과  | 0.13ms     | 10.1MB        |


## 효율성테스트


| 테스트 번호 | 결과  | 실행 시간  | 메모리 사용량 |
|-------------|-------|------------|---------------|
| 테스트 1    | 통과  | 650.52ms   | 92.5MB        |
| 테스트 2    | 통과  | 847.68ms   | 87MB          |
| 테스트 3    | 통과  | 627.68ms   | 90.2MB        |
| 테스트 4    | 통과  | 575.53ms   | 91.1MB        |
| 테스트 5    | 통과  | 479.40ms   | 77MB          |
| 테스트 6    | 통과  | 553.23ms   | 87.8MB        |
| 테스트 7    | 통과  | 346.23ms   | 55.2MB        |
| 테스트 8    | 통과  | 331.90ms   | 56.8MB        |
| 테스트 9    | 통과  | 427.27ms   | 64.9MB        |
| 테스트 10   | 통과  | 593.43ms   | 88.4MB        |
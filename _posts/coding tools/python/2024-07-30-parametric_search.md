---
title:  "[알고리즘] Parametric Search" 

categories: coding_tools
tag: [python, coding, samsung, coding test, sw expert, 다시 봐야함]
toc: true
toc_sticky: true
toc_label: 목차
use_math: true
sidebar:
    nav: "counts"
date: 2024-07-30
last_modified_at: 2024-07-30
---

문제 풀다가 알게된 새로운 로직이라 정리하게 됐습니다. (본인 공부 및 기록용)😁

# Parametric Search란?
특정 문제를 결정(Yes/No)로 변환하여 이진 탐색(Binary Search) 등을 활용해 최적해를 찾는 알고리즘입니다. 주로 최적화 문제에서 사용되고, 최적화 문제를 적절한 결정 문제로 변환하고 그 결정 문제를 해결하는 과정을 반복해 최적해를 찾습니다.

## 예시 1

<div class="notice--info">
    <h4>다음과 같이 n개의 숫자가 주어졌을 때, 칸막이를 m개를 쳐서 각 칸막이를 경계로 나뉜 숫자들의 합들 중 최댓값이 최소가 되도록 하는 프로그램을 작성하시오.</h4>
    <pre>
        n, m = 10, 4
          arr = [2, 3, 5, 5, 3, 1, 6, 5, 7, 3]

        result : 10
    </pre>
</div>

n, m = 10, 4
arr = [2,3,5,5,3,1,6,5,7,3] 일 때, 총합이 40이므로 우선 답은 1 ~ 40임

1) 최댓값이 20이하인 답을 만들어 낼 수 있는지 확인: 
<div align="center">
$
2 3 5 5 3 1 \vert 6 5 7 \vert 3
$
</div>

🚀 칸막이가 2개 이용되므로 <span style="color:red;">20</span>은 답 후보가 되고 가능하면 최댓값을 최소화해야하므로 추가적으로 탐색 <span style="color:red;">[1,19]</span>

2) 최댓값이 10이하인 답을 만들어낼 수 있는지 확인:
<div align="center">
$
2 3 5 | 5 3 1 | 6 | 5 | 7 3
$
</div>

🚀 칸막이가 4개로 해결했기 때문에 최댓값을 <span style="color:red;">10</span>은 답 후보가 되고 가능하면 최댓값을 최소화해야하므로 추가적으로 탐색 <span style="color:red;">[1,9]</span>

3) 최댓값이 5이하인 답을 만들어낼 수 있는지 확인: <span style="color:red;">"불가능"</span>
🚀 5보다 큰 수가 있어서 불가능함. 최댓값은 더 커져야함 <span style="color:red;">[6,9]</span>

4) 최댓값이 7이하인 답을 만들어낼 수 있는지 확인: 
<div align="center">
$
2 3 | 5 | 5 | 3 1 | 6 | 5 | 7 | 3
$
</div>
🚀 칸막이를 7개로 해결을 했기 때문에 최댓값을 <span style="color:red;">7이하로 하는 것은 불가능 [8,9]</span>

5) ... 

```python
n, m = 10, 4
arr = [2,3,5,5,3,1,6,5,7,3]
def is_possible(arr: list, max_sum: int, m: int) -> bool:
    sum_val = 0 # 현재 숫자의 합
    partition_cnt = 0 # 칸막이 갯수
    
    for elem in arr:
        # 숫자가 max_sum 보다 아예 크면 불가능한 경우.
        if elem > max_sum:
            return False
        
        sum_val += elem # 현재 숫자를 더해줌
        
        # 만약 숫자가 최대합에 해당하는 max_sum을 넘게되면, 현재 숫자 바로 앞에 칸막이를 설치해야함
        # 이때, 칸막이가 설치되므로 sum_val은 arr[i]이 됨
        if sum_val > max_sum:
            partition_cnt += 1 # 칸막이 추가
            sum_val = elem
    return partition <= m # 칸막이가 4개 이하라면 true

left = 1 # 답이 될 수 있는 가장 작은 수
right = 40 # 답이 될 수 있는 가장 큰 수
ans = float("inf")
while left <= right: # left, right가 유효한 구간이면 계속 진행
    mid = (left+right)//2 # 가운데 선택
    if is_possible(arr, mid, m): # 칸막이를 만들 수 있음 
        right = mid-1 # right 변경
        ans = min(ans, mid)
    else:
        left = mid+1 # left 변경
print(ans)
```

출처 : [코드트리 Parametric Search](https://www.codetree.ai/missions/8/problems/distributing-integers/introduction)

## 예시 2
<div class="notice--info">
    <h4>n개의 정수를 분배하여 같은 크기의 정수 k를 m개 만들려고 할 때, 만들 수 있는 k값의 최댓값을 구하는 프로그램을 작성해보세요. 이때, m개를 만들어야 한다는 의미는 m개 이상을 얻어내면 된다는 뜻임에 유의합니다. 단, n개의 정수를 분배할 때는 제한 없이 정수를 분배해도 괜찮지만, 각 정수에서 분배하고 남은 정수들을 합쳐서 새로운 정수로 만들 수는 없습니다. 첫 번째 줄에 n, m이 공백을 두고 주어집니다. 두 번째 줄부터 n개의 줄에 걸쳐 한 줄에 정수가 하나씩 주어집니다.</h4>
    <pre>
        1 ≤ n ≤ 10,000
        1 ≤ m ≤ 100,000
        1 ≤ n개의 정수의 크기 ≤ 100,000
        만들 수 있는 k값의 최댓값을 출력

        input:
        4 11
        802
        743
        457
        539
        result: 10
    </pre>
</div>


```python
n, m = map(int, input().split())
arr = [0]*n
for i in range(n):
    arr[i] = int(input())

def parametric_search(arr: list, m: int):
    left = 0
    right = sum(arr)//m
    n = len(arr)

    if right == 0:
        return 0

    Ks = [0]
    while left <= right:
        mid = (left + right) // 2

        cnt = 0
        for i in range(n):
            cnt += arr[i] // mid
        
        if cnt < m:
            # 더 크게할 수 있음 = 나누는 mid를 줄여야함
            right = mid-1
        elif cnt >= m:
            # 더 잘게 해야함 = 나누는 mid를 키워야함
            left = mid+1
            Ks.append(mid) # 가능한 후보 추가
    return max(Ks)

k = parametric_search(arr, m)
```
출처 : [코드트리 Parametric Search 2](https://www.codetree.ai/missions/8/problems/distributing-integers/description)


## 예시 3
<div class="notice--info">
    <h4>1부터 차례대로 숫자를 적는데, 3이나 5의 배수는 숫자 대신 "Moo"라고 적습니다. 예를 들어 1부터 16까지 숫자를 적는다면 아래와 같습니다.
    1, 2, Moo, 4, Moo, Moo, 7, 8, Moo, Moo, 11, Moo, 13, 14, Moo, 16 ... 이 때, N 번째로 적히는 숫자는 무엇인지 구하는 프로그램을 작성해보시오.</h4>
    <pre>
        1 ≤ N ≤ 100,000,000

        input:
        4
        result: 7
    </pre>
</div>

```python
N = int(input())
INT_MAX = 10**9 + 1
# 풀이 1 => 시간초과. 의도도 아님
cnt = 0
for in range(1, INT_MAX):
    if i%3 == 0 or i%5 == 0:
        continue
    cnt += 1

    if cnt == N:
        print(i)
        break

# 풀이 2 => 반복이 되는 것을 발견하고 창의적으로 해결. 가장 빠른 시간복잡도긴하나 parametric_search 구현이 목표임
arr = [1, 2, "Moo", 4, "Moo", "Moo", 7, 8, "Moo", "Moo", 11, "Moo", 13, 14, "Moo"]
answer += 15 * ((N-1)//8)
dict_num = {1:1, 2:2, 3:4, 4:7, 5:8, 6:11, 7:13, 8:14}
answer += dict_num[(N-1)%8+1]
print(answer)

# 풀이 3
def get_num_of_numbers(mid):
    # moo 수 세기
    moo_cnt = mid//3 + mid//5 - mid//15

    return mid-moo_cnt # 전체 수에서 moo 수를 빼면 진짜 수 반환됨

INT_MAX *= 3

left = 1
right = INT_MAX
min_num = INT_MAX
while left <= right: # 유효한 구간에 모두 수행
    mid = (left+right)//2
    if get_num_of_numbers(mid) >= N: # 수가 n보다 많거나 같으면 후보가 됨 ==> 더 작은 수(mid가 작아지는 방향으로)를 탐방해야함
        right = mid-1
        min_num = min(min_num, mid)
    else: # 수가 N개 보다 적어서 줄일 필요가 있음 ==> 더 큰 수(mid가 커지는 방향으로)를 탐방해야함
        left = mid+1
print(min_num)
```

궁금한 것들이나 추가 및 수정했으면 좋겠는 거 말해주시면 좋을 거 같아요.
좋은 하루 보내시길 바래요 :)

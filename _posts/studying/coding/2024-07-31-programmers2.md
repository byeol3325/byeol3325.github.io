---
title:  "[프로그래머스] 수식 최대화" 

categories: coding
tag: [python, coding]
toc: true
date: 2024-07-31
last_modified_at: 2024-08-01
---

자료구조를 제외한 라이브러리 최대한 사용하지 않고 문제풀기 (필요하면 직접 코딩)

# 문제
[프로그래머스 수식 최대화](https://school.programmers.co.kr/learn/courses/30/lessons/67257#)

# 문제 풀이 및 회고
문제를 읽으면 "경우의 수는 적은데 어떻게 모든 경우의 수를 처리할까"가 관건인 문제다. 수식 처리는 "연산자" 우선, 같은 연산자면 "먼저" 나온 친구부터 해결하면 된다. queue를 사용해서 앞에 수부터 찬찬히 우선 순위가 높은 연산자부터 하나씩 처리해 나가면 된다.

# 코드(python)

```python
from collections import deque
from copy import deepcopy

def permutation(operator):
    """
    연산자들의 모든 우선순위 조합을 생성하는 함수입니다.
    
    Args:
    operator (list): 연산자들의 리스트
    
    Returns:
    results (list): 연산자들의 모든 우선순위 조합이 담긴 리스트
    """
    n = len(operator)
    visited = [0] * n
    results = []
    
    def make(one):
        nonlocal visited, n, operator, results
        for i in range(n):
            if visited[i] == 0:
                visited[i] = 1
                one.append(operator[i])
                if len(one) == n:
                    results.append(deepcopy(one))
                else:
                    make(one)
                visited[i] = 0
                one.pop()
        return None
    
    make([])
    return results


def get_info(line):
    """
    주어진 문자열을 숫자와 연산자로 분리하여 리스트로 반환하는 함수입니다.
    
    Args:
    line (str): 수식이 포함된 문자열
    
    Returns:
    array (deque): 숫자와 연산자가 순서대로 담긴 deque
    operator (set): 수식에 포함된 연산자들의 집합
    """
    array = deque()
    num_start = ""
    operator = set()
    for e in line:
        if e == "+" or e == "-" or e == "*":
            array.append(int(num_start))
            array.append(e)
            operator.add(e)
            num_start = ""
        else:
            num_start += e
    array.append(int(num_start))
    return array, operator

def do_compute_oper(array: list, oper: str):
    """
    주어진 '하나의' 연산자에 따라 수식을 계산하여 새로운 deque로 반환하는 함수입니다.
    
    Args:
    array (deque): 숫자와 연산자가 순서대로 담긴 deque
    oper (str): 현재 계산할 연산자
    
    Returns:
    next_deque (deque): 현재 연산자가 적용된 결과가 담긴 deque
    """
    next_deque = deque()
    while array:
        one = array.popleft()
        if len(next_deque) == 0:
            next_deque.append(one)
        elif one == oper: # 하나의 연산자에 해당하는 연산자만 계산. queue에 젤 위에 것과 같이 연산하면됨
            if one == "-":
                next_deque[-1] -= array.popleft()
            elif one == "+":
                next_deque[-1]  += array.popleft()
            else:  # one == "*"
                next_deque[-1]  *= array.popleft()
        else:  # one != oper 우선순위가 아닌 연산자들은 후에 다음 우선순위 연산에 써야함
            next_deque.append(one)
    return next_deque

def do_compute(array, operator):
    """
    주어진 연산자들의 우선순위 조합을 통해 "모든 경우의 수"를 계산하여,
    "가장 큰 절대값을 반환"하는 함수입니다.
    
    Args:
    array (deque): 숫자와 연산자가 순서대로 담긴 deque
    operator (set): 수식에 포함된 연산자들의 집합
    
    Returns:
    answer (int): 모든 우선순위 조합에 대한 연산 결과의 절대값 중 최댓값
    """
    operator = list(operator)
    answer = -float("inf")
    if len(operator) == 0:
        return array[0]
    else:
        cases = permutation(operator) # 우선 순위가 담긴 모든 경우의 수 
        for case in cases:
            case = deque(case)  # 하나의 우선순위
            
            result = None
            now_array = deepcopy(array) # 원본은 일단 저장해둬야함. 모든 경우의 수에 비교해줘야하기 때문에
            while case: # 모든 연산자를 처리해야함
                one_oper = case.popleft() # 하나의 연산자에 대해
                now_array = do_compute_oper(now_array, one_oper)
            result = now_array[0] # 모든 연산자를 처리하면 now_array(deque)에 하나의 숫자만 담김 = 해당 경우의 최종값
            answer = max(answer, abs(result)) # 가장 큰 절댓값
    return answer

def solution(expression):
    """
    주어진 수식을 최댓값의 절대값으로 변환하여 반환하는 함수입니다.
    
    Args:
    expression (str): 수식이 포함된 문자열
    
    Returns:
    answer (int): 모든 우선순위 조합에 대한 연산 결과의 절대값 중 최댓값
    """
    array, operator = get_info(expression)    
    answer = do_compute(array, operator)
    return answer

```


# 테스트 결과


# 테스트 결과
| 테스트 번호 | 결과 | 실행 시간 | 메모리 사용량 |
|-------------|------|-----------|---------------|
| 테스트 1    | 통과 | 0.07ms    | 10.4MB        |
| 테스트 2    | 통과 | 0.07ms    | 10.4MB        |
| 테스트 3    | 통과 | 0.16ms    | 10.3MB        |
| 테스트 4    | 통과 | 0.30ms    | 10.5MB        |
| 테스트 5    | 통과 | 0.22ms    | 10.3MB        |
| 테스트 6    | 통과 | 0.20ms    | 10.4MB        |
| 테스트 7    | 통과 | 0.21ms    | 10.4MB        |
| 테스트 8    | 통과 | 0.22ms    | 10.4MB        |
| 테스트 9    | 통과 | 0.23ms    | 10.5MB        |
| 테스트 10   | 통과 | 0.25ms    | 10.4MB        |
| 테스트 11   | 통과 | 0.23ms    | 10.5MB        |
| 테스트 12   | 통과 | 0.26ms    | 10.5MB        |
| 테스트 13   | 통과 | 0.30ms    | 10.3MB        |
| 테스트 14   | 통과 | 0.32ms    | 10.4MB        |
| 테스트 15   | 통과 | 0.35ms    | 10.4MB        |
| 테스트 16   | 통과 | 0.14ms    | 10.4MB        |
| 테스트 17   | 통과 | 0.17ms    | 10.5MB        |
| 테스트 18   | 통과 | 0.08ms    | 10.5MB        |
| 테스트 19   | 통과 | 0.07ms    | 10.5MB        |
| 테스트 20   | 통과 | 0.07ms    | 10.6MB        |
| 테스트 21   | 통과 | 0.10ms    | 10.4MB        |
| 테스트 22   | 통과 | 0.10ms    | 10.4MB        |
| 테스트 23   | 통과 | 0.05ms    | 10.4MB        |
| 테스트 24   | 통과 | 0.35ms    | 10.4MB        |
| 테스트 25   | 통과 | 0.32ms    | 10.4MB        |
| 테스트 26   | 통과 | 0.07ms    | 10.5MB        |
| 테스트 27   | 통과 | 0.32ms    | 10.5MB        |
| 테스트 28   | 통과 | 0.15ms    | 10.5MB        |
| 테스트 29   | 통과 | 0.13ms    | 10.5MB        |
| 테스트 30   | 통과 | 0.14ms    | 10.5MB        |
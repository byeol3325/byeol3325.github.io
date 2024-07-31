---
title:  "[프로그래머스] 고고학 최고의 발견" 

categories: coding
tag: [python, coding]
toc: true
date: 2024-07-30
last_modified_at: 2024-07-31
---

자료구조를 제외한 라이브러리 최대한 사용하지 않고 문제풀기 (필요하면 직접 코딩)

# 문제
[프로그래머스 고고학 최고의 발견](https://school.programmers.co.kr/learn/courses/30/lessons/131702)

# 문제 풀이 및 회고
모든 경우의 수를 생각해야하는데 어떻게 구현할지 계속 고민하다가 첫줄 혹은 마지막 줄을 제외하고는 계속 내리거나 올리는 식으로 변환하면 돼서 위에서부터 아래로 내려오면서 모든 원소들을 0으로 바꿔주는 식으로 코드를 진행했다. 또한 마지막 단계에서 0만 확인되면 모든 원소가 0이 되므로 해당 횟수를 비교하는 식으로 결과를 냈다.

# 코드(python)
```python
DIRECTIONS = {-1: [0, 0], 0: [-1, 0], 1: [0, 1], 2: [1, 0], 3: [0, -1]}  # 0 ~ 3, 12시 ~ 9시. 시계방향

def deepcopy(arr: list):
    """
    from copy import deepcopy와 동일한 모듈 (list 한정)
    :param arr: 복사할 array
    :return:
    """
    if type(arr[0]) == int:
        return [i for i in arr]
    return [line[:] for line in arr]


def product(arr: list, n: int):
    """
    from itertools import product와 동일한 모듈 (list 한정)
    :param arr: 실행할 array
    :param n: n개 원소
    :return: 모든 array 파이 n개
    """
    result = []

    def make(array: list):
        """
        1개의 case 만들기
        :param array: 1개의 case 만들기
        :return:
        """
        nonlocal arr, n
        for i in range(len(arr)):
            array.append(arr[i])
            if len(array) == n:
                result.append(deepcopy(array))
            else:
                make(array)
            array.pop()

    make([])
    return result


def turn(board: list, loc: list, cnt: int):
    """
    자신을 포함해서 상하좌우 시계방향으로 cnt 번만큼 돌리기
    :param board: board
    :param loc: 위치
    :param cnt: 돌릴 횟수
    :return:
    """
    global DIRECTIONS
    n = len(board)
    for k, v in DIRECTIONS.items():
        dr, dc = v
        nr, nc = loc[0] + dr, loc[1] + dc
        if (0 <= nr < n) and (0 <= nc < n):
            board[nr][nc] = (board[nr][nc] + cnt) % 4
    return None


def solution(clockHands):
    """
    최소 돌릴 횟수
    :param clockHands: board
    :return:
    """
    answer = 8 * 8 * 3  # 최대 돌렸을 때 경우의 수. 모든 셀 최대 3번만 돌리면됨 0번이나 4번이나 동일
    n = len(clockHands)

    end_board = [[0] * n for _ in range(n)]
    for one_case in product([0, 1, 2, 3], n):  # 첫 줄 돌리는 방법
        cnt = 0
        one_board = deepcopy(clockHands)

        for j, one_turn in enumerate(one_case):
            turn(one_board, [0, j], one_turn) # 첫줄 돌리기
            cnt += one_turn # 돌린 횟수 더하기

        for i in range(1, n): # 1 ~ n-1 번째 줄
            for j in range(n): # 0 ~ n 열
                if one_board[i - 1][j] != 0: # 자신 포함 '상'하좌우가 변하므로 '상'에 것을 일단 0으로 만드는 방향으로 돌리기
                    needed_turn = (4 - one_board[i - 1][j]) % 4
                    turn(one_board, [i, j], needed_turn)
                    cnt += needed_turn

        if all(x == 0 for x in one_board[-1]): # 위에 '상' 에 있는 것들은 다 0으로 만들었으므로 마지막 줄만 확인하면 됨
            answer = min(answer, cnt)

    # 최소한 조작으로 해결
    return answer
```


# 테스트 결과


| 테스트 번호 | 결과 | 실행 시간 | 메모리 사용량 |
|-------------|------|-----------|---------------|
| 테스트 1    | 통과 | 0.14ms    | 10.1MB        |
| 테스트 2    | 통과 | 0.14ms    | 10.3MB        |
| 테스트 3    | 통과 | 12.01ms   | 10.3MB        |
| 테스트 4    | 통과 | 1262.60ms | 12.3MB        |
| 테스트 5    | 통과 | 1484.95ms | 12.2MB        |
| 테스트 6    | 통과 | 6444.86ms | 18.6MB        |
| 테스트 7    | 통과 | 6977.44ms | 18.6MB        |
| 테스트 8    | 통과 | 6352.52ms | 18.6MB        |
| 테스트 9    | 통과 | 7108.19ms | 18.5MB        |
| 테스트 10   | 통과 | 6295.58ms | 18.5MB        |


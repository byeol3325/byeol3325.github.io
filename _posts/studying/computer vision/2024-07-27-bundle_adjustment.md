---
title:  "번들 조정(BA: Bundle Adjustment)에 대하여 (in computer vision)" 
categories: studying
tag: [python, cpp, studying, Computer Vision, CV, ai, 3D]
date: 2024-07-27
author_profile: true
toc: true
toc_sticky: true
toc_label: 목차
use_math: true
sidebar:
    nav: "counts"
last_modified_at: 2024-07-27

---

이 글에서는 번들 조정(BA: Bundle Adjustment)이 무엇인지 간단하게 설명하고, Computer Vision에서 언제 어떻게 쓰이는지 예시와 함께 다룰 예정입니다. (본인 공부 및 기록용)😁

# 번들 조정(BA: Bundle Adjustment)이란?
Bundle Adjustment는 컴퓨터 비전 및 로봇 공학에서 사용하는 최적화 기법으로, "여러 뷰에서 획득한 2D 이미지 포인트와 해당하는 3D 포인트 사이의 일관성을 최적화하는 과정"입니다. 이를 통해 "카메라 매개변수와 3D 포인트를 동시에 조정"하여 전체 시스템의 정확도를 높입니다.


# 기본 원리
번들 조정은 아래 두 가지 요소를 최적화하면서 전체 시스템의 정확도를 높입니다.
- **카메라 매개 변수**: 카메라의 위치와 방향, 그리고 내적 매개변수(초점 거리, 렌즈 왜곡 등). 카메라 내부 파라미터, 외부 파라미터라 보면 됩니다. (Extrinsic Parameters, Intrinsic Parameters)

참조 - [위키](https://en.wikipedia.org/wiki/Camera_resectioning#Intrinsic_parameters){: .btn .btn--info} [참조 블로그](https://xoft.tistory.com/12){: .btn .btn--info}
- **3D 포인트**: 여러 뷰에서 관찰된 3차원 점들의 위치입니다. 여러 이미지에서 보여진 3D 포인트는 동일한 객체의 점으로 식별되어야 합니다.

# 번들 조정의 작동 과정
## **1. 초기 추정치 설정**
- 번들 조정은 초기 카메라 매개변수와 3D 포인트의 추정치로 시작합니다. 이 초기 추정치는 다른 알고리즘(예: 삼각 측량, 카메라 캘리브레이션)에서 얻을 수 있습니다.

## **2. 오차 함수 정의**
- 오차 함수는 2D 이미지 포인트와 3D 포인트를 투영한 결과 사이의 차이를 나타냅니다. 번들 조정의 목표는 이 오차를 최소화하는 것입니다.
- 수학적으로, 이는 각 2D 포인트 $p_(ij)$ 와 해당하는 투영된 3D 포인트 $P_j$ 사이 차이를 최소화하는 과정입니다.

## **3. 최적화 알고리즘 사용**
- [Levenberg-Marquardt 알고리즘](https://de.wikipedia.org/wiki/Levenberg-Marquardt-Algorithmus)과 같은 비선형 최적화 기법을 사용하여 오차 함수를 최소화합니다. 이를 통해 카메라 매개변수와 3D 포인트의 위치가 점차적으로 조정됩니다.

# 번들 조정 활용 예시
1. 3D reconstruction

2. SLAM (Simultaneous Localization and Mapping)

# 번들 조정 발전들
앞으로 하나씩 공부해 나가면서 설명할 예정입니다.

[BALM](https://github.com/hku-mars/BALM)

[HBA](https://github.com/hku-mars/HBA)

[Efficient and Consistent Bundle Adjustment on Lidar Point Clouds](https://arxiv.org/abs/2209.08854)

# 수학적 모델

이것저것 공부하면서 Bundle Adjustment 기법에 대해 새로 알게 되는 내용은 계속 추가할 예정입니다. 궁금한 것들이나 추가 및 수정했으면 좋겠는 거 말해주시면 좋을 거 같아요.
좋은 하루 보내시길 바래요 :)
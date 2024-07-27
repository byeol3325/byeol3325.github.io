---
title:  "번들 조정(BA: Bundle Adjustment)에 대하여 (in computer vision)" 
categories: studying
tag: [python, cpp, studying, Computer Vision, CV, ai, 3D]
date: 2024-07-27
toc: true

last_modified_at: 2024-07-7
---

이 글에서는 SVD가 무엇인지 간단하게 설명하고, Computer Vision에서 언제 어떻게 쓰이는지 예시와 함께 다룰 예정입니다. (본인 공부 및 기록용)😁

# 번들 조정(BA: Bundle Adjustment)이란?
Bundle Adjustment는 컴퓨터 비전 및 로봇 공학에서 사용하는 최적화 기법으로, "여러 뷰에서 획득한 2D 이미지 포인트와 해당하는 3D 포인트 사이의 일관성을 최적화하는 과정"입니다. 이를 통해 "카메라 매개변수와 3D 포인트를 동시에 조정"하여 전체 시스템의 정확도를 높입니다.


# 기본 원리
번들 조정은 아래 두 가지 요소를 최적화하면서 전체 시스템의 정확도를 높입니다.
- **카메라 매개 변수**: 카메라의 위치와 방향, 그리고 내적 매개변수(초점 거리, 렌즈 왜곡 등). 카메라 내부 파라미터, 외부 파라미터라 보면 됨
- **3D 포인트**: 여러 뷰에서 관찰된 3차원 점들의 위치

# 수학적 모델



이것저것 공부하면서 Bundle Adjustment 기법에 대해 새로 알게 되는 내용은 계속 추가할 예정입니다. 궁금한 것들이나 추가 및 수정했으면 좋겠는 거 말해주시면 좋을 거 같아요.
좋은 하루 보내시길 바래요 :)
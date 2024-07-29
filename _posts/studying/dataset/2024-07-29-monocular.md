---
title:  "단안카메라(Monocular) 관련 연구에 대해 (in computer vision)" 
categories: studying
tag: [python, studying, 3D, point cloud, computer vision, cv, monocular]
date: 2024-07-29
toc: true
sidebar:
    nav: "docs"
last_modified_at: 2024-07-29
---

단안 카메라는 하나의 카메라를 통해 이미지를 얻고, 이를 활용한 다양한 연구들을 정리해보려 합니다. (본인 공부 및 기록용)😁

# 단안 카메라(Monocular)란?
하나의 렌즈를 통해 이미지를 캡처하는 카메라 입니다. 일반적인 카메라가 그 예시입니다. 이러한 카메라는 다른 센서들 비해 상대적으로 저렴하고 간단하게 사용할 수 있어 꾸준히 연구되고 있습니다.

# 단안 카메라를 통한 연구들 소개
단안 카메라를 통해 수집된 데이터를 활용하여 연구되고 있는 것들을 간단하게 소개하겠습니다.

## 1. 객체 검출 및 트래킹(Detection & Tracking)

대표적인 예시로는 [Yolo(You Only Look Once)](https://pjreddie.com/darknet/yolo/)가 있고, 단안 카메라를 활용한 연구 중 가장 빠르게 상용화되고 있습니다.

## 2. 세그멘테이션 (Segmentation)
이미지 분할은 이미지의 각 픽셀을 특정 클래스에 할당하는 작업입니다. 단안 카메라를 사용한 이미지 분할은 자율 주행 차량의 도로 인식, 로봇의 환경 인식 등에 활용됩니다.
대표적인 모델로는 [Mask R-CNN](https://github.com/matterport/Mask_RCNN)가 있습니다.

## 3. 깊이 추정 (Depth)
깊이 추정은 단일 이미지에서 각 픽셀의 깊이(거리) 값을 추정하는 작업입니다. 단안 카메라를 활용한 깊이 추정은 비용이 낮기에 다양한 환경에서 사용될 수 있어 활발히 연구되고 있는 분야입니다. 하지만 lidar에 비해 성능이 많이 뒤쳐져 상용화하기에는 이른 기술입니다.

# 데이터 셋
단안 카메라를 활용한 연구에 자주 사용되는 대표적인 데이터셋을 소개하겠습니다.

## 1. KITTI
자율주행 연구를 위해 수집된 대규모 데이터셋으로, 다양한 도로 환경에서 촬영된 이미지와 깊이 정보가 포함되어 있습니다.

- 다운로드 : [KITTI Dataset](https://www.cvlibs.net/datasets/kitti/)

## 2. Cityscapes
도시 환경에서 촬영된 고해상도 이미지으로, 깊이 정보와 함께 다양한 객체 라벨이 포함되어 있습니다.

- 다운로드 : [Cityscapes Dataset](https://www.cityscapes-dataset.com/)

## 3. NYU Depth V2
실내 장면에서 촬영된 RGB-D 데이터셋으로, 다양한 실내 환경에서의 깊이 정보를 제공합니다.

- 다운로드 : [NYU Depth V2 Dataset](https://www.kaggle.com/datasets/soumikrakshit/nyu-depth-v2)

이것저것 공부하면서 단안 카메라에 대해 새로 알게 되는 내용은 계속 추가할 예정입니다. 궁금한 것들이나 추가 및 수정했으면 좋겠는 거 말해주시면 좋을 거 같아요.
좋은 하루 보내시길 바래요 :)

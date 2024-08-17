---
title:  "[Computer Vision] latent vector에 대하여" 
categories: studying
tag: [python, studying, Computer Vision, CV, ai, 작성중, 사진 추가 예정]
date: 2024-08-15
author_profile: true
toc: true
toc_sticky: true
toc_label: 목차
use_math: true
sidebar:
    nav: "counts"
last_modified_at: 2024-08-15
---


이 글에서는 latent vector이 무엇인지 간단하게 설명하고, Computer Vision에서 언제 어떻게 쓰이는지 예시와 함께 다룰 예정입니다. (본인 공부 및 기록용)😁

# Latent Vector란?
**Latent Vector(잠재 벡터)**는 기계 학습과 딥러닝에서 **데이터를 압축**하고 **내재된(숨겨진) 정보나 패턴을 나타내는 고차원 벡터**입니다. 이 벡터는 **원본 데이터의 특성을 압축하여 저차원 공간에 표현**한 것이며, 데이터 간의 관계나 유사성을 더 잘 이해하고 분석하는 데 사용됩니다.

# Latent Vector의 주요 특징
**압축된 표현**: 원본 데이터의 **중요한 정보를 압축하여 벡터 공간에 표현**합니다.
**의미 있는 구조**: **벡터 공간에서의 거리가 데이터 간의 유사성**을 나타냅니다. 즉, **가까운 벡터는 원본 데이터에서 유사한 특성을 공유한다**는 의미입니다

# Latent Vector과 Embedding
처음에 공부할 때 데이터를 Embedding을 하면 Latent Vector가 되는건가? 라 생각했습니다. 여기서 Latent Vector과 Embedding의 차이점을 간단하고 쉽게 정리하고 합니다.

Latent space는 고차원 데이터의 낮은 차원 표현이 위치하는 공간을 가리킵니다.
임베딩은 이러한 저차원 데이터를 원래 고차원 공간에 맵핑하는 방법을 의미합니다.

Latent space : 

embedding : 원본 데이터를 저차원 공간으로 표현하는 것입니다.
"Latent space" and "embedding" both refer to an (often lower-dimensional) representation of high-dimensional data:

Latent space refers specifically to the space from which the low-dimensional representation is drawn.
Embedding refers to the way the low-dimensional data is mapped to ("embedded in") the original higher dimensional space.



이것저것 공부하면서 latent vector에 대해 새로 알게 되는 내용은 계속 추가할 예정입니다. 궁금한 것들이나 추가 및 수정했으면 좋겠는 거 말해주시면 좋을 거 같아요.
좋은 하루 보내시길 바래요 :)
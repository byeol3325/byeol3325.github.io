---
title:  "[Computer Vision] Embedding에 대하여" 
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



이 글에서는 Embedding이 무엇인지 간단하게 설명하고, Computer Vision에서 언제 어떻게 쓰이는지 예시와 함께 다룰 예정입니다. (본인 공부 및 기록용)😁

# 임베딩(Embedding)이란?
**임베딩**은 **데이터를 수치 벡터로 표현**하여 **고차원 공간에서 저차원 공간으로 변환**하는 기술입니다. 복잡한 데이터를 머신러닝 모델이 처리할 수 있도록 간단히 표현하는 방식입니다.
임베딩은 **2013년 Word2Vec**이라는 자연어 처리 기술로 처음 주목받았습니다. 이 기술은 **유사한 의미의 단어들을 벡터 공간에서 가깝게 위치**시켰습니다.

```python
# NLP에서의 Embedding
from gensim.models import Word2Vec

# 샘플 문서
sentences = [["고양이", "는", "동물", "입니다"], ["개", "도", "동물", "입니다"]]

# Word2Vec 모델 학습
model = Word2Vec(sentences, vector_size=10, window=2, min_count=1, workers=4)

# "고양이"의 임베딩 벡터 출력
print(model.wv["고양이"])
```

+ 그림 추가 예정

임베딩은 언어모델쪽에서 처음 도입되었지만 Computer Vision에서는 어떻게 쓰이는지 배워야하는지 알아보겠습니다.

## Embedding과 Latent Vector

# 임베딩이 필요한 이유
임베딩이 필요한 이유는 **데이터를 컴퓨터가 보다 효율적으로 처리하고 분석**하기 위해서입니다. 임베딩은 **고차원 데이터를 저차원으로 변환**하여 **데이터의 중요한 특징을 추출하면서도 원본 데이터의 의미를 유지**합니다.

언어 처리(NLP): **단어를 벡터로 변환**해 **유사한 의미를 가지는 단어들이 가까운 벡터 공간에 위치**하게 합니다. 예를 들어, Word2Vec, BERT와 같은 임베딩 방법들이 사용됩니다.

컴퓨터 비전: **이미지 데이터를 임베딩하여 중요한 시각적 특징을 압축**하고, 그 결과물로 **객체 인식, 이미지 검색, 군집화 등의 작업에서 성능을 향상**시킵니다. 예를 들어, CNN(Convolutional Neural Networks)을 사용하여 이미지에서 특징 벡터를 추출하는 방법이 있습니다.

```python
# Computer Vision에서의 Embedding
import tensorflow as tf
from tensorflow.keras.applications import VGG16
from tensorflow.keras.models import Model
from tensorflow.keras.preprocessing import image
from tensorflow.keras.applications.vgg16 import preprocess_input
import numpy as np

# VGG16 모델 불러오기 (사전 학습된 가중치 사용)
base_model = VGG16(weights='imagenet')
model = Model(inputs=base_model.input, outputs=base_model.get_layer('fc1').output)

# 이미지 불러오기 및 전처리
img_path = 'example_image.jpg'
img = image.load_img(img_path, target_size=(224, 224))
img_data = image.img_to_array(img)
img_data = np.expand_dims(img_data, axis=0)
img_data = preprocess_input(img_data)

# 이미지 임베딩 생성
embedding_vector = model.predict(img_data)

print("임베딩 벡터 크기:", embedding_vector.shape)
print("임베딩 벡터 값:", embedding_vector)
```


# 임베딩 역할
**고차원->저차원**: 원본 데이터가 고차원일 때 직접 클러스터링, 분류를 수행하면 계산 복잡도가 높아지고, 성능이 저하될 수 있습니다. 임베딩은 이러한 고차원 데이터를 저차원으로 변환시켜 이를 완화합니다.

**유사성 파악**: 임베딩은 **데이터 간의 유사성을 더 잘 반영하는 특징 공간으로 변환**해줍니다. 예를 들어, 언어에서 "고양이"와 "개"는 서로 다른 단어지만 의미적으로 유사하므로 임베딩 공간에서는 가까운 벡터로 표현됩니다.

**잡음 제거**: **원본 데이터에 포함된 불필요한 정보나 잡음을 줄여** 데이터 분석 및 머신러닝 모델의 성능을 높일 수 있습니다.


# Computer Vision에서 Embedding

## 1. 이미지 특징 추출
이미지에서 **의미 있는 정보를 추출**하여 **저차원 벡터로 표현**하는 것이 임베딩의 주요 역할 중 하나입니다. 예를 들어, CNN(Convolutional Neural Network)은 이미지의 특징을 자동으로 추출하고 이를 벡터 형태로 변환하여, 이후 분류나 검색 등의 작업에서 활용합니다. 이렇게 추출된 벡터는 이미지의 중요한 정보를 압축하여 표현하므로, 비슷한 이미지들은 벡터 공간에서 가까이 위치하게 됩니다.


## 2. 이미지 검색
임베딩을 이용하면 **이미지 검색이 훨씬 효율적**입니다. 예를 들어, 사용자가 하나의 이미지를 입력하면, 그 이미지와 유사한 이미지를 **임베딩 벡터 공간에서 찾아낼 수** 있습니다. **벡터 간의 거리를 계산하여 가장 가까운 이미지를 찾는 방식**으로, 이를 통해 대규모 이미지 데이터베이스에서 빠르고 정확한 검색이 가능합니다.


## 3. 이미지 군집화(clustering)
임베딩을 통해 **이미지 데이터를 군집화**할 수 있습니다. 예를 들어, 비슷한 패턴이나 색상을 가진 이미지들이 서로 가깝게 군집되도록 임베딩 벡터를 학습시킬 수 있습니다. 이러한 군집화는 이미지 분류나 데이터 정리에서 유용하게 쓰입니다.


## 4. 이미지 생성
GAN(Generative Adversarial Network) 같은 모델에서는 **임베딩을 활용해 새로운 이미지를 생성**합니다. 예를 들어, 특정 스타일로 변환된 이미지를 생성하거나, 노이즈에서 출발해 실사 같은 이미지를 만들어내는 데 임베딩이 사용됩니다.




이것저것 공부하면서 Embedding에 대해 새로 알게 되는 내용은 계속 추가할 예정입니다. 궁금한 것들이나 추가 및 수정했으면 좋겠는 거 말해주시면 좋을 거 같아요.
좋은 하루 보내시길 바래요 :)
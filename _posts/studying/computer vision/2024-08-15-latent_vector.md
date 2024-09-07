---
title:  "[Computer Vision] latent vector에 대하여" 
categories: studying
tag: [python, studying, Computer Vision, CV, ai, 사진 추가 예정]
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


# Latent Vector의 역할

- **데이터 압축** : Latent Vector는 **고차원 데이터를 작은 차원으로 압축**하면서도, 원본 데이터의 **중요한 특성을 보존**합니다.


- **의미를 포함하는 구조** : **데이터 간의 관계나 유사성**을 **벡터 공간에서 수치적으로 나타내는 방식**을 제공합니다. 이 벡터들 간의 **거리가 가까울수록**, 해당 데이터들이 **유사한 특성을 공유한다**고 볼 수 있습니다.


# Latent Vector과 Embedding

둘 다 고차원 데이터를 저차원으로 변환하는 방식을 다루기 때문에, 처음에 공부할 때 데이터를 Embedding을 하면 Latent Vector가 되는건가? 라 생각했습니다.
여기서 Latent Vector과 Embedding의 차이점을 
간단하고 쉽게 정리하고 합니다.

- Latent Vector는 **데이터의 내재된 정보를 표현하는 저차원 벡터**를 말합니다. 

- Embedding은 주로 **텍스트나 카테고리형 데이터를 벡터로 변환**할 때 사용하는 용어입니다.

```python
import numpy as np
import tensorflow as tf
from tensorflow.keras.layers import Input, Dense
from tensorflow.keras.models import Model

# 입력 데이터: 28x28 크기의 이미지 (MNIST와 같은 데이터)
input_img = Input(shape=(784,))

# 인코더: 입력 이미지를 32차원 Latent Vector로 압축
encoded = Dense(32, activation='relu')(input_img)

# 디코더: 다시 원본 크기(784차원)로 복원
decoded = Dense(784, activation='sigmoid')(encoded)

# 오토인코더 모델
autoencoder = Model(input_img, decoded)

# 인코더 모델 (Latent Vector만 추출)
encoder = Model(input_img, encoded)

# 컴파일 및 학습
autoencoder.compile(optimizer='adam', loss='binary_crossentropy')

# Latent Vector 생성
x_train = np.random.rand(1000, 784)  # 예시: 1000개의 이미지 데이터 (784차원)
autoencoder.fit(x_train, x_train, epochs=10, batch_size=256, shuffle=True)

# 데이터에서 Latent Vector 추출
latent_vectors = encoder.predict(x_train)
print("Latent Vectors Shape:", latent_vectors.shape)  # (1000, 32)
```

위 코드는 오토인코더라는 신경망을 이용해서 784 차원 이미지 데이터를 32차원 Latent Vector로 압축하는 예시입니다.



```python
from tensorflow.keras.layers import Embedding
from tensorflow.keras.preprocessing.text import Tokenizer
from tensorflow.keras.preprocessing.sequence import pad_sequences

# 예시 문장들
sentences = ["I love machine learning", "I enjoy learning new things"]

# 단어 인덱스 생성
tokenizer = Tokenizer(num_words=1000)
tokenizer.fit_on_texts(sentences)
sequences = tokenizer.texts_to_sequences(sentences)
word_index = tokenizer.word_index

# 문장 패딩 (길이를 맞춰줌)
padded_sequences = pad_sequences(sequences, maxlen=5)

# Embedding 레이어: 1000개의 단어를 32차원 벡터로 변환
embedding_layer = Embedding(input_dim=1000, output_dim=32, input_length=5)

# 임베딩된 결과
embedded_sequences = embedding_layer(padded_sequences)

print("Original Sequences:", sequences)
print("Padded Sequences:", padded_sequences)
print("Embedded Sequences Shape:", embedded_sequences.shape)  # (2, 5, 32)
```

위 코드는 단어들을 32차원 Embedding 벡터로 변환하는 예시입니다. 각 문장의 단어들이 32차원의 벡터로 표현되며, 이를 통해 단어 간의 유사성을 벡터 공간에서 비교할 수 있습니다.


Embedding은 Latent Vector의 일종일 수 있지만, Latent Vector이 조금 더 포괄적인 개념입니다. 한번 더 설명하자면, Embedding은 주로 텍스트 데이터에 사용되며, 특정 데이터를 벡터로 변환하는 방법이고, Latent Vector은 데이터의 내제된 정보를 표현하는 압축된 벡터로 텍스트, 이미지, 영상 등 모든 종류의 데이터에 적용될 수 있습니다.


이것저것 공부하면서 latent vector에 대해 새로 알게 되는 내용은 계속 추가할 예정입니다. 궁금한 것들이나 추가 및 수정했으면 좋겠는 거 말해주시면 좋을 거 같아요.
좋은 하루 보내시길 바래요 :)
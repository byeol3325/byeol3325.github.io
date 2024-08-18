---
title:  "[Research] Transformer #1" 
categories: research
tag: [python, studying, cv, transformer, GPT, BERT, 진행중]
date: 2024-08-15
toc: true
toc_sticky: true
toc_label: 목차
use_math: true
sidebar:
    nav: "docs"
last_modified_at: 2024-08-17
---


# Transformer이란?
Transformer 모델은 2017년 논문 "Attention is All You Need"에서 처음 소개되었습니다. 이 모델은 기존의 RNN(순환 신경망) 기반 모델들이 가지는 문제점을 극복하며 자연어 처리(NLP)와 컴퓨터 비전 분야에서 큰 혁신을 가져왔습니다. Transformer는 주로 **자기 주의 메커니즘(Self-Attention Mechanism)**을 활용하여 **입력의 모든 요소 간의 관계를 학습**합니다. 또한, 이 모델은 순차적인 처리 대신 **병렬 처리가 가능**해 연산 효율성을 크게 향상시켰습니다.

Transformer 모델은 원래 자연어 처리(NLP)에서 주로 사용되었으나, 최근 3 ~ 4년 전부터 **Computer Vision(CV) 분야에서도** 혁신적인 변화를 일으키고 있습니다. Transformer는 주로 이미지 인식, 객체 검출, 이미지 생성 등 다양한 비전 태스크에 사용되며, 특히 CNN(Convolutional Neural Network)과 다른 접근 방식을 제공합니다.

Transformer는 **Attention Mechanism**을 기반으로 하며, 이미지나 텍스트와 같은 **입력 데이터를 동시에 처리하는 능력**을 가지고 있습니다. 이는 모델이 **입력의 모든 부분 간의 관계를 파악하여 전체적인 문맥을 이해**하도록 합니다. 전통적인 CNN은 국소적인 정보를 위주로 처리하지만, Transformer는 **글로벌한 시각적 특징을 더 잘 포착**합니다.


# Transformer 작동 원리
Transformer마다 작동원리가 좀 다르지만 대략적인 큰 틀에서 간단하게 설명드리겠습니다.

1. **Input Embedding**
입력된 **단어 시퀀스를 고차원 벡터로 변환**합니다.

<p align="center">
$
X = [x_1, x_2, ..., x_n]
$
</p>


2. **Positional Encoding**
위치 정보를 추가하여 **순서의 의미를 부여**합니다. **포지셔널 인코딩은 주기함수**로 정의됩니다.

<p align="center">
$
PE_{pos, 2i} = \sin (\frac{pos}{10000^{2i / d_{model}}}) \\
PE_{pos, 2i+1} = \cos (\frac{pos}{10000^{2i / d_{model}}})
$
</p>


3. **Self-Attention**
각 단어가 **다른 모든 단어와의 관계를 계산하여 관련성을 평가**합니다.
세 가지 행렬을 사용해 계산합니다. 쿼리(Q), 키(K), 값(V):

<p align="center">
$
Attention(Q, K, V) = softmax(\frac{QK^T}{\sqrt{d_k}})V
$
</p>

여기서 $Q=W_QX, K=W_KX, V=W_VX$ 입니다.


4. **Multi-Head Attention**
**여러 개의 어텐션을 병렬로 계산**한 후, **이들을 결합**합니다.

<p align="center">
$
MultiHead(Q, K, V) = Concat(head_1, ... head_h)W_O
$
</p>

여기서 $head_i = Attention(QW_Q, KW_K, VW_V)$ 입니다.


5. **Feed-Forward Network**
각 위치에서 독립적으로 처리됩니다.
<p align="center">
$
FFN(x) = ReLU(xW_1 + b_1)W_2 + b_2
$
</p>

6. **Layer Normalization and Residual Connection**
각 sub-layer 뒤에 **Layer Normalization과 Residual Connection이 적용**됩니다.
<p align="center">
$
Output = LayerNorm(x + sub-layer(x))
$
</p>

7. **Output**
이후 이 과정이 반복된 후 **최종 출력이 softmax 함수**를 통해 **각 클래스에 대한 확률로 변환**됩니다.



# Transformer 특징
**글로벌 컨텍스트 이해**: 입력 **전체의 관계를 한 번에 파악**할 수 있어, 문맥을 잘 이해합니다.
**병렬 처리**: RNN과 달리 병렬 처리가 가능해 훈련 속도가 빠릅니다.

**고비용 연산**: 모든 요소 간의 관계를 계산해야 하므로, 계산 비용이 큽니다.
**큰 데이터 요구**: 성능을 최대로 발휘하려면 대규모 데이터가 필요합니다.


# 대표 Transformer 모델 in Language
GPT (Generative Pretrained Transformer): BERT와 달리 주로 텍스트 생성에 특화된 모델로, 한 방향으로 텍스트를 예측하는 방식입니다.

BERT (Bidirectional Encoder Representations from Transformers): NLP에서 문맥을 양방향으로 이해하는 데 뛰어난 성능을 보이는 모델로, 사전 훈련 후 특정 태스크에 미세 조정하는 방식으로 사용됩니다.


# 대표 Transformer 모델 in Vision
**Vision Transformer(ViT)**는 Transformer를 이미지 처리에 적용한 대표적인 예입니다. ViT는 이미지를 패치(patch)라는 작은 조각으로 나누고, 이 패치를 시퀀스 데이터처럼 Transformer에 입력합니다. 패치 간의 관계를 학습함으로써, 이미지의 전체 구조를 이해합니다. ViT는 특히 대규모 데이터셋에서 뛰어난 성능을 보이며, 전통적인 CNN과 비교해도 손색이 없는 성능을 자랑합니다.

Swin Transformer: 

DETR (Detection Transformer): 객체 검출을 위해 Transformer를 적용한 모델로, 이미지 내 객체를 정확하게 탐지하는 데 사용됩니다.
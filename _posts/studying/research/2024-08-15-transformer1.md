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
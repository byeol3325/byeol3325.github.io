---
title:  "[Research] Transformer #2" 
categories: research
tag: [python, studying, computer vision, cv, transformer, ViT, DETR, 진행중]
date: 2024-08-17
toc: true
toc_sticky: true
toc_label: 목차
use_math: true
sidebar:
    nav: "docs"
last_modified_at: 2024-08-17
---


# Transformer이란?
Transformer 모델은 원래 자연어 처리(NLP)에서 주로 사용되었으나, 최근 3 ~ 4년 전부터 **Computer Vision(CV) 분야에서도** 혁신적인 변화를 일으키고 있습니다. Transformer는 주로 이미지 인식, 객체 검출, 이미지 생성 등 다양한 비전 태스크에 사용되며, 특히 CNN(Convolutional Neural Network)과 다른 접근 방식을 제공합니다.

Transformer는 **Attention Mechanism**을 기반으로 하며, 이미지나 텍스트와 같은 **입력 데이터를 동시에 처리하는 능력**을 가지고 있습니다. 이는 모델이 **입력의 모든 부분 간의 관계를 파악하여 전체적인 문맥을 이해**하도록 합니다. 전통적인 CNN은 국소적인 정보를 위주로 처리하지만, Transformer는 **글로벌한 시각적 특징을 더 잘 포착**합니다.


# Transformer 작동 원리



# 대표 Transformer 모델 in Vision
**Vision Transformer(ViT)**는 Transformer를 이미지 처리에 적용한 대표적인 예입니다. ViT는 이미지를 패치(patch)라는 작은 조각으로 나누고, 이 패치를 시퀀스 데이터처럼 Transformer에 입력합니다. 패치 간의 관계를 학습함으로써, 이미지의 전체 구조를 이해합니다. ViT는 특히 대규모 데이터셋에서 뛰어난 성능을 보이며, 전통적인 CNN과 비교해도 손색이 없는 성능을 자랑합니다.

Swin Transformer: 

DETR (Detection Transformer): 객체 검출을 위해 Transformer를 적용한 모델로, 이미지 내 객체를 정확하게 탐지하는 데 사용됩니다.
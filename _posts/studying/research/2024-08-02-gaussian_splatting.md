---
title:  "[논문 리뷰] 3D Gaussian Splatting for Real-Time Radiance Field Rendering" 
categories: research
tag: [python, studying, 3D, point cloud, computer vision, cv, paper]
date: 2024-08-02
toc: true
toc_sticky: true
toc_label: 목차
use_math: true
sidebar:
    nav: "docs"
last_modified_at: 2024-08-02
---

다양한 3D 프로젝트들을 하면서 3D에 관심이 많아졌고 3D 분야에서 최근 핫한 기술인 3D Gaussian Splatting에 대해 리뷰해보려 합니다. (본인 공부 및 기록용)😁

github 링크 : [3D Gaussian Splatting](https://github.com/graphdeco-inria/gaussian-splatting?tab=readme-ov-file)

# 3D Gaussian Splatting 간략 설명
각 Gaussian 분포는 3D 공간에서 특정 지점을 나타내며, 이 지점을 2D 화면에 투영할 때 해당 지점이 Gaussian 형태로 뿌려지는 (splatting) 방식을 말합니다. 해당 글에서는 여러 장의 사진이나 비디오를 통해 3D 장면을 실시간으로 렌더링하는 방법에 대해 다룹니다. 기존의 방법들은 높은 품질을 유지하기 위해 많은 시간과 비용이 소요되었지만, 이 논문에서는 이러한 문제를 해결하기 위해 새로운 3D Gaussian Splatting 기술을 제안합니다. 이 기술을 통해 고해상도의 3D 장면을 실시간으로 렌더링할 수 있습니다.

# 논문 요약
Radiance Field 관련 방법들([NeRF](https://github.com/bmild/nerf))이 최근에 새로운 뷰 합성 방법으로 떠오르고 있습니다. 그러나 이러한 3D 고품질을 달성하려면 여전히 훈련과 렌더링에 큰 신경망이 필요하고, 다른 방법들 또한 품질을 위해서는 시간과 비용이 듭니다. 
3D Gaussian Splatting은 높은 품질을 달성하는 동시에 짧은 훈련 시간과 1080p 의 고품질 영상을 실시간으로 합성합니다. 
<div class="notice--info">
    <h4> 주요 Contribution </h4>
    <pre>
- 카메라 calibration 중에 생성된 sparse point들(주요 지점)에서 시작하여, 장면을 3D Gaussian으로 표현합니다. 장면 최적화를 위해 연속적인 volume radiance fields의 유용한 특성을 유지하면서도 빈공간에서 불필요한 계산을 피하게 함
- 3D Gaussian의 interleaved 최적화/밀도 제어 방법을 통해 anisotropic covariance를 최적화하여 정확한 장면 묘사를 달성하였음
- 빠른 visibility-aware rendering 알고리즘을 개발하여 빠른 학습속도와 실시간 rendering 가능하게 하였음
    </pre>
</div>

# 전체 간략화
입력 데이터:
- 정적 장면 이미지 set
- SfM(Structure from Motion): 이 이미지를 사용하여 카메라를 교정하고, 그 과정에서 생성된 sparse point cloud

3D Gaussian 생성
- point cloud: SfM 과정에서 생성된 sparse point
- 3D Gaussian: 각 점을 중심으로 위치(평균), 공분산 행렬(Covariance matrix), 투명도($\alpha$) 등을 정의하여 3D Gaussian 분포 생성

Radiance Field
- Radiance Field: 장면의 색상 정보 및 방향성 포함
- 구면 고조파(Spherical Harmonics, SH): 색상 정보를 나타내기 위해 사용. 복잡한 빛의 방향성을 표현

최적화 과정
- 위치, 공분산, $\alpha$, SH 계수: 3D Gaussian 위치, 공분산 행렬, 투명도, 구면 고조파 계수를 최적화하여 장면을 더욱 정확하게 표현
- 적응형 밀도 제어: 필요에 따라 Gaussian을 추가하거나 제거하여 밀도를 조절, 이를 통해 장면을 더 정확하게 표현

tile-based rasterization
- 타일 기반 분할: 화면을 작은 타일로 나누어 각 타일에서 rendering 수행. 병렬로 하기에 속도가 빨라짐
- 가시성 순서: Gaussian들이 겹쳐질 때, 어떤 것이 더 앞에 있는지 순서를 빠르게 정렬하여 올바른 투명도 blending을 수행
- 빠른 backward pass: 누전된 $\alpha$ 값을 추적하여 Gaussian의 수에 제한 없이 빠르게 gradient backpropagation 계산을 수행

# 주요 내용

## related works 및 주요 차이점
### Traditional Scene Reconstruction and Rendering
SfM(Structure from Motion, 2006)이 등장하여 여러 이미지들을 이용하여 새로운 시간을 합성할 수 있게 되었습니다. 과정에서 sparse point cloud 생성하여 3D 공간을 시각화하였습니다.

MVS(Multi-view Stereo, 2007)이 등장하면서 완전한 3D reconstruction 알고리즘이 개발됐습니다. 이후 view sysnthesis 알고리즘들이 개발되었고 이러한 알고리즘들은 입력 이미지를 새로운 시각 카메라로 re-project하고 blending하며 이 과정에서 기하학을 이용합니다. 

이러한 방법들은 매우 뛰어난 성능을 보이지만, 생성되지 않은 영역이나 Over-view(시각적으로 겹치는 부분)가 적은 부분은 복구를 못하는 단점이 있습니다. 

최근에 [neural rendering 알고리즘](https://arxiv.org/pdf/2111.05849)이 개발되어 모든 입력 이미지를 GPU에 저장하는 비용을 줄일 수 있었고 이전 방법들보다 더 뛰어난 성능을 
발휘합니다.


### Neural Rendering
간단히 말해, 신경망을 사용하여 이미지를 생성하고나 조작하는 기술입니다. 입력데이터로 **여러 각도에서 활영된 이미지 또는 비디오**를 받아 신경망을 통해 **3D 상 기하학적 및 광학적 특성**을 학습하고, 이를 통해 새로운 시각을 합성합니다.

Soft3D에서 새로운 view 합성을 위한 초기 volume 표현 기술이 개발되었고, 연속적으로 미분 가능한 밀도 field를 사용해 3차원을 구현하였습니다.
이후 많이 알려진 NeRF에서 중요 샘플링과 위치 인코딩을 도입해 품질을 향상시켰습니다. Mip-NeRF360은 최고 수준의 이미지 품질을 제공하지만 위와 같은 방법들은 훈련 및 렌더링 시간이 매우 깁니다.

최근에 학습시간과 렌더링 시간이 더 빠른 방법들이 연구되어 왔습니다. 크게 3가지로
1) spatial data structure 이용
volume ray-marching 동안 신경망 특징을 저장하고 보관

2) 다양한 encoding
hash-table, codebook 등을 사용해 작은 MLP 또는 신경망을 사용하도록 하였음

3) 적은 학습
hash grid와 occupancy grid를 사용해서 계산을 가속화하고, 작은 MLP로 밀도와 외관을 표현하거나, sparse voxel grid를 사용해서 연속적인 밀도 field를 보간하고 신경망을 사용하지 않았음
하지만 이러한 방법들은 여전히 빈 공간을 다루는데 제한적이었고, 구조화된 grid 선택에 따라 속도와 이미지 품질이 제한됐습니다.

이에 Gaussian Splatting은 GPU 친화적이고 신경망을 사용하지 않으면서 더 빠른 렌더링 속도와 현 기술 수준에 준하거나 더 나은 품질을 제공하려 하였습니다.


### Point-Based Rendering and Radiance Fields



## 최적화 및 밀도 제어 알고리즘
<div class="notice--info">
    <h4> 의사코드 </h4>
    <pre>
M ← SfM Points ⊲ 카메라 calibration으로부터 생성된 sparse point Positions
S, C, A ← InitAttributes() ⊲ Covariances, Colors, Opacities 초기화
i ← 0 ⊲ Iteration Count 반복 횟수 설정

while not converged do # 수렴할때까지 진행
    V, I' ← SampleTrainingView() ⊲ 훈련용 뷰 V(camera)와 이미지를 샘플링
    I ← Rasterize(M, S, C, A, V) ⊲ 주어진 뷰 V에서 현재 상태의 3D Gaussian을 2D 이미지로 rasterization
    L ← Loss(I, I') ⊲ 생성된 이미지(I)와 실제 이미지(I')간 손실 계산 Loss
    M, S, C, A ← Adam(∇L) ⊲ 손실 기울기를 사용하여 Adam 최적화 Backprop & Step

    if IsRefinementIteration(i) then ⊲ 특정 반복 횟수마다 세부 조정 수행
        for all Gaussians (μ, Σ, c, α) in (M, S, C, A) do ⊲ 모든 Gaussian에 대해
            if α < ε or IsTooLarge(μ, Σ) then ⊲ 투명도가 낮거나 너무 큰 Gaussian은 제거 Pruning
                RemoveGaussian()
            end if
            if ∇pL > τp then ⊲ 기울기 ∇pL이 특정 임계값 τp를 초과하면 밀도 제어 수행 Densification
                if ∥S∥ > τS then ⊲ 공분산 S가 특정 임계값 τS를 초과하면 Gaussian 분할 Over-reconstruction
                    SplitGaussian(μ, Σ, c, α)
                else ⊲ 그렇지 않으면 Gaussian 복사 Under-reconstruction
                    CloneGaussian(μ, Σ, c, α)
                end if
            end if
        end for
    end if
    i ← i + 1
end while
    </pre>
</div>


## 3D Gaussian의 GPU rasterization
<div class="notice--info">
    <h4> 의사코드 </h4>
    <pre>
w, h: 이미지의 가로, 세로
M, S: 월드 공간에 Gaussian 평균과 공분산
C, A: Gaussian 색과 투명도
V: 현재 카메라 뷰 V

function Rasterize(w, h, M, S, C, A, V)
    CullGaussian(p, V) ⊲ 카메라 뷰 V에서 보이지 않는 Gaussian 제거 Frustum Culling
    M', S' ← ScreenspaceGaussians(M, S, V) ⊲ 3D Gaussian을 2D 화면 공간으로 변환 Transform
    T ← CreateTiles(w, h) ⊲ 화면을 작은 타일로 분할
    L, K ← DuplicateWithKeys(M', T) ⊲ 각 타일에 Gaussian index와 key를 중복 생성
    SortByKeys(K, L) ⊲ key를 기준으로 전역 정렬
    R ← IdentifyTileRanges(T, K) ⊲ 각 타일의 범위를 식별하여 리스트 생성

    I ← 0 ⊲ Init Canvas 
    for all Tiles t in I do # 각 타일에 대해
        for all Pixels i in t do # 각 픽셀 i에 대해
            r ← GetTileRange(R, t) # 타일 범위 r을 가져와서
            I[i] ← BlendInOrder(i, L, r, K, M', S', C, A) # 정해진 순서에 따라 i 픽셀에 Gaussian blending 수행
        end for
    end for
    return I
end function
    </pre>
</div>

# 결론




//

다음 [NeuRAD](https://github.com/georghess/neurad-studio)(CVPR 2024)

// 진행중

이것저것 공부하면서 3D Gaussian Splatting에 대해 새로 알게 되는 내용은 계속 추가할 예정입니다. 궁금한 것들이나 추가 및 수정했으면 좋겠는 거 말해주시면 좋을 거 같아요.
좋은 하루 보내시길 바래요 :)
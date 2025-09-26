
# Grocery Shopping Cart Action Recognition Challenge (Track 1)

[![Challenge](https://img.shields.io/badge/Challenge-1st%20Place-gold)](https://github.com/your-repo)
[![Python](https://img.shields.io/badge/Python-3.8+-blue.svg)](https://python.org)
[![CUDA](https://img.shields.io/badge/CUDA-12.1-green.svg)](https://developer.nvidia.com/cuda-toolkit)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

---

## Achievement Highlights

**1st Place Winner** in the ICCV 2025 Grocery Vision Challenge hosted by Amazon!
- **TAL (Temporal Action Localization)**: 2nd Place (Historical Best)
- **STAL (Spatio-Temporal Action Localization)**: 1st Place (Historical Best)
- State-of-the-Art Performance across evaluation metrics

---

## Overview

This repository contains our **award-winning solution** for the "ICCV 2025 Grocery Vision Challenge" hosted by Amazon. Our innovative approach combines cutting-edge deep learning techniques to achieve unprecedented accuracy in detecting and classifying three critical consumer behaviors:

### Target Actions
- **Take**: Customer picking up items from shelves
- **Return**: Customer putting items back to shelves  
- **Rummage**: Customer searching through items without taking

### Our Winning Methodology

Our solution leverages a sophisticated **multi-modal fusion architecture** that integrates:

#### **Temporal Action Localization (TAL)**
Our TAL approach utilizes OpenTAD framework with:
- **AdaTAD**: Adaptive temporal action detection for precise boundary localization
- **CausalTAD**: Causal temporal modeling for robust action classification
- **Ensemble Strategy**: Multiple model configurations for enhanced performance

#### **Spatio-Temporal Action Localization (STAL)**  
Our STAL pipeline combines:
- **GLEE**: Advanced object detection for precise localization
- **SAM2**: Segment Anything Model 2 for fine-grained object segmentation
- **Temporal Tracking**: Robust object tracking across video sequences

<!-- VIDEO UPLOAD SECTION - Add your demo videos here -->
### 🎥 Demo Videos & Visualizations

> **📹 Video Demonstrations**: *Upload your visualization videos here to showcase the solution in action!*

```markdown
<!-- Replace with actual video links when ready -->
🎬 [Demo Video 1: Take Action Detection](link_to_video_1)
🎬 [Demo Video 2: Return Action Analysis](link_to_video_2)  
🎬 [Demo Video 3: Rummage Behavior Recognition](link_to_video_3)
🎬 [Demo Video 4: Complete Pipeline Visualization](link_to_video_4)
```

This comprehensive guide enables seamless replication of our winning results, providing detailed setup instructions, execution procedures, and result verification methods.

## 🚀 Setup and Installation

Follow our streamlined setup process to replicate the award-winning environment. Our automated installation scripts ensure hassle-free deployment of the complete solution.

### 📁 **Project Structure Overview**

```
🏆 iccv25Grocery-Vision-Challenge_1st/ (1st Place Solution)
├── 🧠 TAL/                          # Temporal Action Localization
│   ├── OpenTAD/                     # TAL framework
├── 📍 STAL/                         # Spatio-Temporal Action Localization
│   ├── GLEE/                        # Object detection module
│   ├── sam2/                        # Segmentation module
│   └── tracking_output/             # STAL tracking results
├── 📊 data/                         # Challenge datasets
│   └── challenge_test/              # Test data directory
│       └── video_00001/             # Sample video data
│           ├── frames/              # Extracted frames
│           └── visualized.mp4       # Original video
├── 🔧 build_Track1.sh              # Automated environment setup
├── ⚡ inference.sh                 # Main inference pipeline
├── ⚙️ config.py                    # Configuration settings
├── 🔗 create_final_results.py      # Fusion & refinement engine
└── 📋 README.md                    # This comprehensive guide
```

> **💡 Pro Tip**: The challenge test data should be placed in `data/challenge_test/`. You can customize the data path in `config.py` if needed.

### 🔐 **Permission Setup**

Grant execution permissions to our automated setup scripts:

```bash
# Make scripts executable
sudo chmod +x build_Track1.sh
sudo chmod +x inference.sh

# Verify permissions
ls -la *.sh
```

####  **Installation Progress Tracking:**

The script provides detailed progress updates:
```
[INFO] Setting up TAL environment...
[INFO] Installing OpenTAD dependencies...
[INFO] Configuring STAL environment...  
[INFO] Building GLEE components...
[INFO] Setting up SAM2 framework...
[INFO] ✅ Installation completed successfully!
```

### 🔍 **Verification Steps**

After installation, verify your setup:

```bash
# Check Conda environments
conda env list | grep -E "(TAL|STAL)"

# Verify CUDA availability
conda activate TAL_Challenge-test
python -c "import torch; print(f'CUDA Available: {torch.cuda.is_available()}')"

# Check GPU memory
nvidia-smi
```

### 🆘 **Troubleshooting Common Issues**

| Issue | Solution |
|-------|----------|
| **CUDA not found** | Ensure NVIDIA drivers are installed: `nvidia-smi` |
| **Permission denied** | Run: `sudo chmod +x *.sh` |
| **Conda command not found** | Install Anaconda/Miniconda first |
| **Out of memory** | Ensure 24GB+ GPU VRAM available |

## ⚡ Winning Inference Pipeline

Our **award-winning inference pipeline** is designed for maximum efficiency and accuracy. Execute our complete solution with a single command that orchestrates the entire workflow from raw video input to final predictions.

### 🚀 **One-Command Execution**

```bash
# 🏆 Run the complete 1st place solution
bash inference.sh
```

### 🔄 **Three-Stage Pipeline Architecture**

Our winning approach follows a sophisticated three-stage pipeline that maximizes both temporal and spatial understanding:

```
Input Videos → TAL Models → STAL Pipeline → Fusion Engine → 🏆 Final Results
```

---

#### **🕐 Stage 1: Multi-Configuration TAL Inference**

**🎯 Objective**: Generate robust temporal action predictions using ensemble approach

```bash
# Parallel execution of 4 specialized TAL models
for i in 1 2 3 4; do
  torchrun tools/test.py pretrained/$i/$i.py \
    --checkpoint pretrained/$i/best_loss.pth \
    --dump ../results_config_$i --mode infer
done
```

**🔧 Technical Details**:
- **Output Format**: Temporal segments with confidence scores
- **Storage**: Results saved in designated TAL output directories

**📊 Model Specializations**:
*Detailed model configurations and performance metrics are confidential as per challenge guidelines. Complete technical details will be available in our upcoming research paper.*

---

#### **📍 Stage 2: Advanced STAL Pipeline**
**🎯 Objective**: Generate precise spatio-temporal object localizations

##### **🔍 GLEE Object Detection**
```bash
cd STAL/GLEE && sh run_glee.sh
```
- **State-of-the-Art Detection**: Precise object localization in each frame
- **Multi-Class Recognition**: Handles diverse grocery items
- **High Precision**: Optimized for shopping cart scenarios

##### **🎨 SAM2 Segmentation & Tracking**
```bash
cd STAL/sam2 && python inference_v2.py
```
- **Pixel-Perfect Segmentation**: Fine-grained object boundaries
- **Temporal Consistency**: Robust tracking across video sequences
- **Advanced Tracking**: Maintains object identity through occlusions

**📁 Output**: Rich spatio-temporal tubelets saved in `STAL/tracking_output/`

---

#### **⚡ Stage 3: Intelligent Fusion & Refinement**

**🎯 Objective**: Combine TAL and STAL outputs for optimal performance

```bash
# Fusion engine for each configuration
python create_final_results.py \
  --tal_results_path TAL/results_config_${i} \
  --detection_results_path STAL/tracking_output \
  --output_dir final_results_v${i}
```

**🧠 Fusion Algorithm**:
1. **Temporal Intersection**: Calculate overlap between TAL segments and STAL tubelets
2. **Confidence Refinement**: Adjust scores based on multi-modal agreement  
3. **Action-Object Association**: Link actions to specific objects in the scene
4. **Boundary Optimization**: Refine start/end times using spatial information

**Performance Benefits**:
*Performance metrics and comparative analysis are confidential as per challenge organizers' guidelines. Detailed results will be published in our upcoming research paper.*

### 📊 **Pipeline Execution Monitoring**

Track your inference progress with detailed logging:

```bash
# Monitor execution in real-time
tail -f final_result_config*.log

# Check completion status
ls -la final_results_v*/
```

### 🎯 **Quality Assurance**

## 🏆 Results Verification & Analysis

Upon successful completion of our winning pipeline, you'll have **four comprehensive result sets** representing our multi-configuration approach. Each configuration contributes to the overall robustness of our 1st place solution.

#### **🕐 TAL (Temporal Action Localization) Results**

**📍 Location**: `TAL_results_txt/` and `TAL_results_json/`

**📋 Format**: Precise temporal boundaries with confidence scores
```
<start_frame>,<end_frame>,<action_class>,<confidence>
```

**📝 Example**:
```
140,186,0,0.8516    # Take action: frames 140-186, confidence 85.16%
235,320,0,0.7349    # Take action: frames 235-320, confidence 73.49%
369,438,0,0.6968    # Take action: frames 369-438, confidence 69.68%
```

**🎯 Action Class Mapping**:
- `0` = **Take** (picking up items)
- `1` = **Return** (putting items back)  
- `2` = **Rummage** (searching through items)

---

#### **STAL (Spatio-Temporal Action Localization) Results**

**Location**: `STAL_results_txt/` and `STAL_results_json/`

**Format**: Rich spatio-temporal tubelets with object tracking
```json
[
    {
        "track": [[frame, x1, y1, x2, y2, conf], ...],
        "conf": <confidence_score>,
        "cat": <"take"|"return"|"rummage">
    }
]
```

**Example**:
```json
[
    {
        "track": [
            [140, 0.2, 0.3, 0.5, 0.7, 0.92],
            [141, 0.21, 0.31, 0.51, 0.71, 0.91],
            [142, 0.22, 0.32, 0.52, 0.72, 0.90]
        ],
        "conf": 0.8516,
        "cat": "take"
    }
]
```

**🔍 Coordinate System**: Normalized coordinates (0.0 - 1.0)
- `x1, y1`: Top-left corner of bounding box
- `x2, y2`: Bottom-right corner of bounding box
- `conf`: Per-frame detection confidence

---

### 📊 **Performance Metrics**

**Confidential Results**: Performance metrics and detailed evaluation results are confidential as per the challenge organizers' guidelines. Complete performance analysis and comparative studies will be made available through our upcoming research publication.


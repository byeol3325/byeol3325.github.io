// This file manages the resume data.
// You can easily add or modify projects, papers, and skills here.

export const introduction = {
  title: 'SungHo Moon',
  subtitle: 'A passionate Computer Vision(2D/3D) Engineer in Korea.',
  description: [
    'I plan to continue uploading the projects I have done in the future.',
    'I’m currently learning **multi-modal, multi-camera, lidar.**',
    'I’m looking to collaborate on **everything about computer vision.**',
    'Ask me about **everything about me.**',
    'How to reach me **byul3325@naver.com or byul3325@gmail.com.**',
    'my github blog [git blog](https://byeol3325.github.io/).',
  ],
  collaboration: {
    text: 'I have experience collaborating with companies here !!! **About 2D/3D Object Detection, 3D Reconstruction(Bundle Adjustment, Pose Graph Optimization), On-board(memory & time optimization), Camera Calibration(using 1D/2D chessboard), AI ethics, AI module performance improvement in specific environment ...**',
    companies: [
      { name: 'Hyundai Motor Company', logo: 'img/hyundai_motor_company.png', url: 'https://www.hyundai.com/' },
      { name: 'KETI', logo: 'img/keti.png', url: 'https://www.keti.re.kr/main/main.php' },
      { name: 'ETRI', logo: 'img/etri.png', url: 'https://www.etri.re.kr/intro.html' },
      { name: 'Ministry of National Defense', logo: 'img/ministry_of_national_defense.png', url: 'https://www.mnd.go.kr/mbshome/mbs/mnd/index.jsp' },
      { name: 'ROKA Headquarters Insignia', logo: 'img/headquarters.png', url: 'https://www.army.mil.kr/sites/army/index.do' },
      { name: 'U.S Department of Defense logo', logo: 'img/us_dod.png', url: 'https://www.defense.gov/' },
      { name: 'HD Korea shipbuilding & Offshore Engineering', logo: 'img/hd_shipping.png', url: 'https://www.hdksoe.co.kr/' },
      { name: 'Huvitz logo', logo: 'img/huvitz.png', url: 'https://www.huvitz.com/' },
    ],
  },
};

export const projects = [
    {
        title: 'ICCV 2025 Amazon Grocery Vision Challenge - 1st Place Winner',
        company: 'Amazon (ICCV 2025 Challenge)',
        date: 'Jul 2025 - Aug 2025',
        goal: 'Develop a multi-modal AI model for Temporal Action Localization (TAL) and Spatio-Temporal Action Localization (STAL) in grocery shopping scenarios.',
        role: 'Lead Researcher (Solo) - Designed and implemented multi-modal fusion architecture combining video, audio, and contextual information for precise action detection and localization in retail environments.',
        achievement: 'Achieved 1st place in both TAL and STAL tracks within just 1 month of development. Successfully deployed multi-modal model achieving state-of-the-art performance on Amazon grocery dataset.',
        blogUrl: '/projects/iccv-2025-challenge',
    },
    {
        title: 'Real time 3D Reconstruction using Dental Scanner',
        company: 'Huvitz',
        date: 'Jun 2024 - Jul 2025',
        goal: 'Develop a real-time 3D reconstruction system using scanner.',
        role: 'Core Developer (70% contribution) - New 3D reconstruction module development using LCD & PGO.',
        achievement: 'Improved speed by up to 80% compared to the existing algorithm without performance degradation.',
        blogUrl: null,
    },
    {
        title: 'Development of a 3D Pose Estimation and Shape Reconstruction Program for Solid Pharmaceuticals',
        company: 'ETRI',
        date: 'Sep 2024 - Dec 2024',
        goal: 'Developed a prototype system to estimate 3D pose and reconstruct shapes of solid pharmaceuticals, enabling automatic pill detection, recognition, and counting without additional training.',
        role: 'Lead Researcher (80% contribution) - Designed and implemented algorithms for pill pose estimation and 3D shape reconstruction using template matching, color feature analysis, and geometric warping techniques.',
        achievement: 'Demonstrated accurate pill classification and counting, showcasing potential for automated pharmaceutical management.',
        blogUrl: null,
    },
    {
        title: 'Algorithm Development for Automated Image Processing of Stereo Cameras',
        company: 'HD Korea Shipbuilding & Offshore Engineering',
        date: 'Sep 2024 - Nov 2024',
        goal: 'To design and implement core algorithms enabling automated image processing for stereo camera systems.',
        role: 'Core Developer (40% contribution) - Contributed to the development of a camera calibration module using a circular grid chessboard pattern.',
        achievement: 'Delivered a prototype calibration module and contributed to automation pipeline design. Further technical details remain confidential due to project agreements.',
        blogUrl: null,
    },
    {
        title: 'R&D of AI Test and Evaluation Standard Model',
        company: 'ROKA Headquarters',
        date: 'Oct 2023 - Jun 2024',
        goal: 'Create a standard military training/test dataset and build a baseline AI model for introducing various AI weapon systems in the Army.',
        role: 'Lead Researcher (60% contribution) - Developed an Auto-Labeler for military datasets, performed data cleansing and construction, and developed a baseline model for performance verification.',
        achievement: 'Established initial standards for the Military Performance Certification Center (including dataset construction, baseline model development, and formulation of various strategies).',
        blogUrl: null,
    },
    {
        title: 'Establishment of Test and Evaluation Standards for AI Weapon Systems',
        company: 'ROKA Headquarters, U.S. Department of Defense',
        date: 'Mar 2023 - Jun 2024',
        goal: 'Develop new testing and evaluation standards for AI weapon systems, which differ significantly from traditional weapon systems.',
        role: 'AI Test and Evaluation Researcher (30% contribution) - Collaborated with the U.S. Department of Defense, coordinated with the Ministry of National Defense, and conducted extensive research on AI weapon systems, including identifying requirements.',
        achievement: 'Established initial standards for the Military Performance Certification Center (including dataset construction, baseline model development, and formulation of various strategies).',
        blogUrl: null,
    },
    {
        title: 'Military Scientific Surveillance System',
        company: 'ROKA Headquarters',
        date: 'Mar 2023 - Sep 2023',
        goal: 'Reduce false/missed detections and improve true detections by building an AI-based surveillance system.',
        role: 'Performance Enhancement Officer (30% contribution) - Drastically reduced false positives by utilizing TOD camera information (absolute distance from the camera).',
        achievement: 'Reduced false positives by 10% compared to the existing system.',
        blogUrl: null,
    },
    {
        title: 'Development of Car Location and Speed Estimation Module Using CCTV Footage',
        company: 'ETRI',
        date: 'Aug 2022 - Dec 2022',
        goal: 'Develop a module capable of estimating vehicle position and speed solely from CCTV video data.',
        role: 'Lead Researcher (80% contribution) – Engineered road detection and image warping algorithms, developed vehicle speed estimation methods, and optimized overall system performance.',
        achievement: 'Achieved over 90% accuracy in vehicle speed estimation on the target dataset.',
        blogUrl: null,
    },
    {
        title: 'Robust Monocular Camera 3D Object Detection in Various Camera Environments',
        company: 'Hyundai',
        date: 'Mar 2021 - Jun 2022',
        goal: 'Improve the robustness of monocular camera-based 3D object detection, addressing significant performance degradation caused by varying camera environments.',
        role: 'Lead Researcher (70% contribution) – Developed data augmentation techniques to enhance model generalization across different camera angles, identified the root causes of performance degradation, and implemented correction algorithms to mitigate these effects.',
        achievement: 'Diagnosed key factors affecting model accuracy and significantly improved performance: Accuracy increased from 20% to 80% for a 3-degree angle variation. Accuracy increased from 1% to 50% for a 5-degree angle variation. Research findings contributed to international patents and publications(CVPRw 2024).',
        blogUrl: null,
    },
    {
        title: '3D Building Exterior Reconstruction',
        company: 'KETI',
        date: 'Aug 2020 - Dec 2020',
        goal: 'Develop a 3D reconstruction module using monocular images.',
        role: 'Lead Researcher (80% contribution) – Designed and implemented keypoint matching (SIFT/SURF), computed epipolar geometry, estimated camera relationships, and applied PnP & bundle adjustment (BA). Led the development of the full 3D reconstruction pipeline.',
        achievement: 'Successfully built a 3D reconstruction module that processes monocular images to generate 3D structures.',
        blogUrl: '/projects/3d-reconstruction',
    },
];

// You can add your paper data here.
export const papers = [
    {
        title: 'Rotation Matters: Generalized Monocular 3D Object Detection for Various Camera Systems',
        authors: 'SungHo Moon, JinWoo Bae, SungHoon Im',
        journal: 'CVPR Workshop 2023',
        date: 'June 2023',
        description: 'Proposed a generalized approach for monocular 3D object detection that addresses performance degradation caused by varying camera orientations and systems.',
        url: 'https://arxiv.org/abs/2310.05366',
        github: 'confidential',
    },
    {
        title: 'Deep Digging into the Generalization of Self-Supervised Monocular Depth Estimation',
        authors: 'Jinwoo Bae, Sungho Moon, Sunghoon Im',
        journal: 'AAAI 2023',
        date: 'May 2022',
        description: 'Investigated the generalization capabilities of self-supervised monocular depth estimation methods across different domains and datasets.',
        url: 'https://arxiv.org/pdf/2205.11083',
        github: 'https://github.com/sjg02122/MonoFormer',
    },
    /* Example:
    {
        title: 'My Awesome Paper',
        journal: 'Conference on Computer Vision and Pattern Recognition (CVPR), 2025',
        url: 'https://example.com/path/to/paper.pdf',
        description: 'This paper introduces a revolutionary new method for...' 
    },
    */
];

export const socialLinks = {
    linkedin: 'https://www.linkedin.com/in/sungho-moon-byeol3325',
    // You can add other social links here
};

export const skills = [
    { name: 'c', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg' },
    { name: 'cplusplus', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg' },
    { name: 'git', icon: 'https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg' },
    { name: 'linux', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg' },
    { name: 'matlab', icon: 'https://upload.wikimedia.org/wikipedia/commons/2/21/Matlab_Logo.png' },
    { name: 'opencv', icon: 'https://www.vectorlogo.zone/logos/opencv/opencv-icon.svg' },
    { name: 'pandas', icon: 'https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/pandas/pandas-original.svg' },
    { name: 'python', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg' },
    { name: 'pytorch', icon: 'https://www.vectorlogo.zone/logos/pytorch/pytorch-icon.svg' },
    { name: 'scikit_learn', icon: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg' },
];

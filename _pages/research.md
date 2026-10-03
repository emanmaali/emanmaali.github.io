---
layout: page
title: Research
permalink: /research/
description: My research studies how machine learning systems fail when deployed in adversarial or real-world conditions, and how to evaluate them so those failures are predicted before deployment.
nav: true
nav_order: 1
# DRAFT
---

<hr style="border: 1px solid grey; margin-bottom: 20px;">

<section>
  <h3>Adversarial Robustness of Multi-Agent AI Pipelines</h3>
  <p><em>Current work · Computational Privacy Group, Imperial College London (2025–present)</em></p>
  <p>
    Multi-agent LLM systems chain several models, tools, and agents together. A pipeline can be compromised as a whole even when every individual component appears robust. I study how optimization-based attacks are used to evaluate the safety of these systems, and where current evaluations fall short.
  </p>
  <ul>
    <li><strong>Paper:</strong> SoK: Understanding the Role of Optimization-Based Attacks in Evaluating Safety of Multi-Agent LLM Systems (under review, 2026).</li>
    <li><strong>Code:</strong> <a href="https://github.com/emanmaali/MASSaftey">github.com/emanmaali/MASSaftey</a></li>
    <!-- TODO: add 1-2 sentences on the main finding once the paper is public. -->
  </ul>
</section>

<section>
  <h3>Robustness of ML-based IoT Device Identification</h3>
  <p><em>PhD research · AESE Lab, Imperial College London (2020–2025)</em></p>
  <p>
    ML models for identifying IoT devices from network traffic report near-perfect accuracy in the lab, but degrade in real deployments. My PhD evaluated these models under realistic conditions, including device mode changes, spatial and temporal distribution shift, and sampled network traffic.
  </p>
  <ul>
    <li><strong>Paper:</strong> Evaluating IoT Device Identification Machine Learning Models for Network Deployment (NDSS 2025). <a href="https://www.ndss-symposium.org/wp-content/uploads/2025-118-paper.pdf">PDF</a> · <a href="https://www.youtube.com/watch?v=y04_a0uTDIM">Talk</a></li>
    <li><strong>Code and datasets:</strong> <a href="https://github.com/emanmaali/IoTDeviceEvaluation">github.com/emanmaali/IoTDeviceEvaluation</a></li>
    <li><strong>Earlier work:</strong> Towards Identifying IoT Traffic Anomalies on the Home Gateway (SenSys 2020).</li>
  </ul>
</section>

<hr style="border: 1px solid grey; margin-top: 30px; margin-bottom: 20px;">

<!--
  Optional extras once the themes are filled in:
  - A one-line "common thread" sentence at the top linking all themes (evaluation under realistic/adversarial conditions).
  - A small figure or diagram per theme (assets/img/research/...).
  - "Open to collaboration / students" line with contact email.
-->

---
pageType: section
title: "Research: emerging nano-scale electronic devices"
tags:
  - notes
  - research
description: "About my research works"
permalink: /research/
version: "1.0"
---
<div class="hero">
  <div class="wrapper fade-in">
      <div class="grid-content">

## Negative capacitance field-effect transistors (NCFETs)
{% storyImage 'notes/research/ncfets.png', '' %}

<p style="text-align: justify">Ferroelectric (FE) materials exhibit (i) two polarization states that can be switched by an externally applied voltage and (ii) non-volatile spontaneous polarization under zero bias. Based on Landau's phenomenological theory, there exists an unstable negative capacitance (NC) region when the polarization switches through the double-well energy profile. Therefore, NCFETs have been proposed as one of the promising beyond-CMOS devices that could potetially overcome the fundamental limit of sub-threshold slopes in the current MOSFETs [1]. In an NCFET, an FE layer is integrated on top of a transistor’s normal gate oxide. By keeping the NC state at the system’s energy minimum, the NC segment is proposed to be stabilized when the FE is in series with the intrinsic gate oxide of a field-effect transistor. </p>

<p style="text-align: justify">In this work, we analyze the perfomances of NCFET-based devices with the circuit-compatible single domain FE model based on the Landau-Khatlatnikov equation [2]. We calibrate the p-type and n-type NCFETs by emphasizing the importance of proper circuit initialization. The perfomance analyses are based on NAND gates and interconnects.</p>

<p style="text-align: justify">Further applications of FE materials include metal-ferroelectric-metal capacitors, metal-ferroelectric-dielectric-metal bilayer stacks, NCFETs for low-power logic operation and FeFETs for non-volatile memory applications.</p>

<b>Related publications:</b><br>[1] S. Salahuddin and S. Datta, “Use of negative capacitance to provide voltage amplification for low power nanoscale devices,” Nano Lett., vol. 8, no. 2, pp. 405–410, 2008, doi: 10.1021/nl071804g. <br>[2] **<u>C.-S. Hsu</u>**, C. Pan, and A. Naeemi, “Performance analysis and enhancement of negative capacitance logic devices based on internally resistive ferroelectrics,” IEEE Electron Device Letters, vol. 39, no. 5, pp. 765– 768, May 2018, doi: [10.1109/led.2018.2820118](https://ieeexplore.ieee.org/document/8327607) (*Editor's Pick*).
    </div>
  </div>
</div>

<div class="hero">
  <div class="wrapper fade-in">
    <div class="grid-content">

## SPICE circuit model of multi-domain ferroelectrics for phase-field simulations
{% storyImage 'notes/research/phase-field.png', '' %}

<p style="text-align: justify">The single domain approximation can be extended to capture the multi-domain nature of FEs with the phase-field approach. The phase-field model incorporates free energy contributions into the discretized domain cells of an FE layer when solving the time-dependent Ginzburg-Landau (TDGL) equation.</p>

<p style="text-align: justify">In this work, we develop a circuit-compatible phase-field model to solve the TDGL and the Poisson's equations self-consistently in the SPICE simulator for the first time [1]. With this model, we are able to explore the effects of domain interaction and the kinetic coefficient on the transient negative capacitance characteristics based on experimental pulse measurements [2].</p>

<b>Related publications:</b> <br>[1] **<u>C.-S. Hsu</u>**, S. Chang, D. E. Nikonov, I. A. Young and A. Naeemi, "A Theoretical Study of Multidomain Ferroelectric Switching Dynamics With a Physics-Based SPICE Circuit Model for Phase-Field Simulations," in *IEEE Transactions on Electron Devices*, doi: [10.1109/TED.2020.2990891](https://ieeexplore.ieee.org/abstract/document/9091950).<br>[2] M. Kobayashi, N. Ueyama, K. Jang, and T. Hiramoto, “Experimental study on polarization-limited operation speed of negative capacitance FET with ferroelectric HfO<sub>2</sub>,” in *2016 IEEE International Electron Devices Meeting (IEDM)*. IEEE, Dec. 2016, doi: 10.1109/iedm.2016.7838402.
    </div>
  </div>
</div>

<div class="hero">
  <div class="wrapper fade-in">
    <div class="grid-content">

## Polarization switching paths in rhombohedral multiferroic BiFeO<sub>3</sub>

<p style="text-align: justify">Magnetoelectric multiferroic materials have the ability to control magnetization switching with an applied electric field through the coupling between magnetic and ferroelectric orders. Among such multiferroic materials, BiFeO<sub>3</sub> (BFO) exhibits thermodynamically stable magnetoelectric effects at room-temperature, and thus shows the potential for the realization of nano-scale magetoelectronics with low-power consumption.</p>

<p style="text-align: justify">Experiments have found that in BFO thin films with as-grown 71° stripe domain patterns, most of the electric polarization switching under an out-of-plane voltage follows a two-step path: in-plane 71° switching followed by an out-of-plane 109° switching for each domain stripe [1]. Such a 180° switching path enables deterministic control of magnetization when BFO is coupled with a ferromagnetic material via the magnetoelectric (ME) effect. The mechanism for the polarization switching behavior may be attributed to rhombohedral crystal strutures and the elastic constraints on the thermodynamically stable polarization directions.</p>

<p style="text-align: justify">With the OOMMF micromagnetic simulations combined with the circuit-compatible SPICE model of BFO [2], the underlying physics of the ME effect and antiferromagetism-ferromagnetism coupling in the BFO/CoFe heterojunction has been studied, where CoFe is a ferromagnetic material [3]. A further application of the magnetoelectric effect was proposed as the magnetoelectric spin–orbit (MESO) logic devices [4].</p>

<b>Related publications:</b> <br>
[1] Heron, J. T. et al., "Deterministic switching of ferromagnetism at room temperature using an electric field," Nature 516, 370–373 (2014). <br>[2] M.J. Donahue and D.G. Porter. OOMMF User’s Guide, Version 1.0 Interagency Report NISTIR 6376, National Institute of Standards and Technology, Gaithersburg, MD (Sept 1999). <br>[3] Yu-Ching Liao, Dmitri E. Nikonov, Sourav Dutta, Sou-Chi Chang, **<u>Chia-Sheng Hsu</u>**, Ian A. Young, and Azad Naeemi, "Understanding the Switching Mechanisms of the Antiferromagnet/Ferromagnet Heterojunction," Nano Letters 2020 *20* (11), 7919-7926, doi: [10.1021/acs.nanolett.0c01852](https://pubs.acs.org/doi/10.1021/acs.nanolett.0c01852). <br>[4] Manipatruni, S., Nikonov, D.E., Lin, C. *et al.* Scalable energy-efficient magnetoelectric spin–orbit logic. *Nature* 565, 35–42 (2019).
    </div>
  </div>
</div>

<div class="hero">
  <div class="wrapper fade-in">
    <div class="grid-content">

## Hysteresis-Free Negative Capacitance Effect in Metal-Ferroelectric-Insulator-Metal Capacitors 
{% storyImage 'notes/research/circuit.png', '' %}

<p style="text-align: justify">The negative capacitance (NC) stabilization of a ferroelectric (FE) material can potentially provide an alternative way to further reduce the power consumption in ultrascaled devices and thus has been of great interest in technology and science in the past decade. In this paper, we present a physical picture for a better understanding of the hysteresis-free charge-boost effect observed experimentally in metal-ferroelectric-insulator-metal (M-F-I-M) capacitors. By introducing the dielectric (DE) leakage and interfacial trapped charges, our simulations of the hysteresis loops are in a strong agreement with the experimental measurements, suggesting the existence of an interfacial oxide layer at the FE-metal interface in metal-ferroelectric-metal (M-F-M) capacitors. Based on the pulse-switching measurements, we find that the charge enhancement and hysteresis are dominated by the FE domain viscosity and DE leakage, respectively. Our simulation results show that the underlying mechanisms for the observed hysteresis-free charge enhancement in M-F-I-M may be physically different from the alleged NC stabilization and capacitance matching. Moreover, the link between Merz’s law and the phenomenological kinetic coefficient is discussed, and the possible cause of the residual charges observed after pulse switching is explained by the trapped charge dynamics at the FE-DE interface. The physical interpretation presented in this work can provide useful insights into the NC effect in M-F-I-M capacitors and future studies of low-power logic devices. </p>

<b>Related publications:</b> <br>
[1] M. Hoffmann, B. Max, T. Mittmann, U. Schroeder, S. Slesazeck, and T. Mikolajick, in 2018 IEEE International Electron Devices Meeting (IEDM). <br>
[2] **<u>C.-S. Hsu</u>**, S. Chang, D. E. Nikonov, I. A. Young and A. Naeemi, "Hysteresis-Free Negative Capacitance Effect in Metal-Ferroelectric-Insulator-Metal Capacitors with Dielectric Leakage and Interfacial Trapped Charges," Phys. Rev. Applied 15, 034048, 2021, doi: [10.1103/PhysRevApplied.15.034048](https://journals.aps.org/prapplied/abstract/10.1103/PhysRevApplied.15.034048).

    </div>
  </div>
</div>
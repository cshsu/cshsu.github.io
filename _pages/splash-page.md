---
title: Splash page
layout: splash
permalink: /splash/
hidden: true
header: 
  overlay_color: "#5e616c"
  overlay_image: /assets/images/bryce.jpg
  caption: "Bryce Canyon National Park"
excerpt: >
  A flexible two-column Jekyll theme. Perfect for building personal sites, blogs, and portfolios.<br />
  <small>Last updated: </small>
feature_row1:
  - image_path: /assets/images/cheer.jpg
    alt: "placeholder image 1"
    title: "Placeholder Image Left Aligned"
    excerpt: 'This is some sample content that goes here with **Markdown** formatting. Left aligned with `type="left"`'
    url: "#test-link"
    btn_label: "Read More"
    btn_class: "btn--primary"
feature_row2:
  - image_path: /assets/images/cheer.jpg
    image_caption: "Image courtesy of [Unsplash](https://unsplash.com/)"
    alt: "placeholder image 2"
    title: "Placeholder 2"
    excerpt: "This is some sample content that goes here with **Markdown** formatting."
    url: "#test-link"
    btn_label: "Read More"
    btn_class: "btn--primary"
---

This is my homepage using Minimal Mistakes theme.

{% include feature_row id="feature_row1" type="left"%}

{% include feature_row id="feature_row2" type="left"%}


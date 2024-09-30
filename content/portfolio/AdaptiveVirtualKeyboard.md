+++
date = "2016-11-05T19:41:01+05:30"
title = "Adaptive Gaze Controlled Virtual Keyboard for people with sensorimotor disabilities"
draft = false
image = "img/portfolio/virtualKeyboard.png"
showonlyimage = false
weight = 1
+++

###### The common input modalities used by people for interacting with a computer are limited to a mouse or a physical keyboard - mostly operated using hands. However, these devices seem futile when the users are motor-impaired or have constrained body movements. 
###### The following project is a virtual keyboard that is operated through eye-gaze rather than hands. The keyboard has a modified QWERTY layout and is integrated with a customized machine learning algorithm to dynamically adapt dwell time of the keys.  

###### Dwell time is the threshold time for which one has to fixate their eyes (or gaze) on a key/button on the screen to perform a mouse click through gaze.

{{< vimeo 885661655 >}}
{{< video src="/img/Projects/VirtualKeyboard/Adaptive Dwell.mp4" class="my-video" width="640" height="360" >}}


## Objectives  of the project

1. To develop a eye-gaze-controlled interface for people with sensorimotor disabilities (quadriplegic in our case).​

2. To reiterate the design of the interface after multiple trials with the users. This includes the placement of the keys and spaces between them, and inclusion, and integration of multiple modalities like sound in the deveoped interface.

3. To build a customized machine learning algorithm to dynamically update the dwell time of the keys (minimum time to click a key through eye-gaze) by learning the user’s usage pattern.

## Results of the project

1. A modified two-level gaze-controlled virtual keyboard for people with motor impairment that is currently in use at Vidya Sagar, Chennai (See the figures below). In order to give ample gaze time to find the key, the keyboard is designed to be a two-level keyboard. In other words, selecting YUIOP key opens up individual keys Y,U,I,O and P for the final selection. The design was tested with the students at the school and was approved by them and their trainers as the final prototype.

![][5]
![][6]

2. The keyboard is integrated with a Markovian based approach to dynamically adapt dwell time of the keys to increase typing speed while maintaining accuracy. The equation below is used to calculate the dwell time of a key on the keyboard based on the previous typing data from the user. Here Dmin refers to the minimum dwell time of any key (set to 300ms to avoid Midas Touch). Pr denotes the probability of selecting a key i after the selection of a key j. Higher is the probability of selection, lower is the dwell time of the key to increase speed while maintaining accuracy.

![][7]

3.  The keyboard was also made customizable so that multiple users can use the keyboard. This also lets us saving the dwell time of the keys of the user, allocated to each user by a unique ID. Hence, enabling the disabled students to learn eye-gaze typing at their own pace. The keyboard is currently installed at Vidya Sagar, Chennai for enhancing digital literacy among the students. Moreover the work published at the Journal of Technology and Disabilities, 2021.

![][8][picture credit: Puneet Jain; in picture: Kamal P. Singh and Viswa (disabled collaborator)]


##### Iterative Design Methodology: Trial and Test Runs on Disabled and Non-Disabled Users

![This is me][1]

The image above depicts one of the initial prototypes that we built for gaze-typing. Kritika (able-bodied) who is a PhD student at IISc (in the image) is using the application to type their name. We use a Tobii Eye tracker to track the eye movements on a 17-inch screen. The keyboard is also integrated with visual (yellow boundary for the button on which gaze is fixated) and auditory (pronouncing the character typed) feedback.

While the keyboard can be used by the able-bodied persons too, one of its prime importance comes into picture when they are operated by children (motor impaired) at Vidya Sagar (formerly known as the Spastic Society of India), Chennai, India.  

![This][2]

{{< vimeo 809064852>}} [A disabled) user testing the keyboard for calculating the variation in dwell time as compared to people with disabilities]

{{< vimeo 809063189>}} [A (non-disabled) user testing the keyboard for calculating the variation in dwell time as compared to people with disabilities]

The dwell time algorithm developed by me was further integrated into applications such as browser navigation through eye-gaze (built and developed by collaborator Kamal Preet Singh). One of such applications was in use by Dr. M. Vijayan (uptil his death in 2022). 

{{< video src="/img/Projects/VirtualKeyboard/Vijayan SIr.mp4" class="my-video" width="640" height="360" >}} [Late Dr. M Vijayan using a eye-gaze based browser navigation application operated using dynamically adapting dwell time of the keys]

##### Final Prototype

{{< youtube TWf2tx7mfVw >}} [Puneet (non-disabled) testing the final prototype in the lab]





[1]: /img/Projects/VirtualKeyboard/kritika.jpg
[2]: /img/Projects/VirtualKeyboard/img4.jpg
[3]: /img/Projects/VirtualKeyboard/img3.jpg
[4]: /img/Projects/VirtualKeyboard/virtualKeyboard.png
[5]: /img/Projects/VirtualKeyboard/Screen1_Final.PNG
[6]: /img/Projects/VirtualKeyboard/Screen2_Final.PNG
[7]: /img/Projects/VirtualKeyboard/Equation1b.PNG
[8]: /img/Projects/VirtualKeyboard/img5.jpg
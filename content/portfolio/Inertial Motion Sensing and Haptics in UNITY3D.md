+++
image = "/img/Projects/Hand/IMU2.JPG"
showonlyimage = false
date = "2016-11-05T19:53:42+05:30"
draft = false
title = "Inertial Motion Sensing and Haptics in UNITY3D"
weight = 2
+++

This was a small attempt to understand how wearable gloves work and what are the various mediums by which one can integrate haptics into the device. The particular glove I used is 'Capto Glove' purchased from the Company of the same name. Currently, the glove consists of an IMU (Intertial Measurement Unit) that provides accelerometer, magnetometer and gyroscopic readings along the three axes. The glove has many other features like bending force calculation, finger pressure readings, etc. The Glove doesn't support Haptic feedback in the current version.

{{< vimeo 381414306>}}

However, the main task for me was to integrate the Glove within a VR environment and find alternative ways of providing feedback to the user. The initial integration involved understanding how to calibrate the glove and its integration with Unity. Since this was my first time working with an SDK (Software Development Kit), it was a real pain to make the right 'firmware' work with the right 'version of Unity' and get the streaming values from the glove in a Unity scene.

Since the glove doesn't provide any sensory feedback, I built a scene in Unity in which a particular motion of the hand generates sensory feedback to the User (See video below). I mapped the rotational motion of the hand to the linear movement of a square box on the screen. I created a socket to send the 3-D coordinates of the square box to an Arduino which triggers a vibrational motor and an LED. Overall, the rotation of the hand that turns the box to the right side of the screen turns on the motor and the green LED while rotation in the opposite direction switches them off.

{{< vimeo 381414528>}}

​This is an experiment for understanding the glove and its working. Further, the motor can be placed on hand or at any other position on the body to provide sensory feedback to the user. While the motor provides feedback to the user, the LED gives visual feedback to the people around. 

One of the carry forward work to this exploration of interacting with the virtual world through a hand led us to create our own version of proof of concept of a glove (a bike glove ~ 1$) integrated with an IMU to create in depth motion of the hand. One of the reason for this exploration was that mostly the hands in a virtual scene - hands using LeapMotion or a BLE device like CaptoGlove do not extend into the speth of the screen i.e. along the z-axis. Hence I created a demo using the jerk (derivative of acceleration) as a feature to investigate the same.

![][2]

![][1]

[1]: /img/Projects/Hand/IMU2.JPG

[2]: /img/Projects/Hand/IMU3.JPG

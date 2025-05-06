+++
draft = false
image = "/img/Projects/CripGestures/IMG_8375.jpg"
date = "2023-11-08T19:56:17+05:30"
title = "Re-imagining XR with people with sensorimotor disabilities through criptastic hacking"
showonlyimage = false
weight = 1
+++

	             "The Future is Disabled" - Leah Laksmi Piepzna-Samarasinha.

{{< vimeo 922130556 >}}


This a post about the making of a series of interventions, that me and my collaborators and friends call 'Crip Sensorama'.  Crip Sensorama(s) are interactive multi-sensory VR/AR work that investigates how the ableist
technologies of XR (eXtended Reality) could be re-imagined and hacked (in their
early stages) to act as a platform of storytelling for (and with) people with
disabilities – shaping their own future imaginaries by opening a portal into disability
culture and living.


#### Rationale: Motivation and Background

![][3]

The current generation of XR technologies still demand an intricate coordination between the head (e.g. 360-degree head movements), hands, and dexterity of body-based gestures (e.g. rapid finger movements on hand-held controllers) to navigate and interact inside the virtual environments – a gestural landscape that my close friends and collaborators Eric Desrosiers and Chrisitan Bayerlein cannot afford. Eric (who is based in Montreal, Canada) and Christian (who is based in Koblenz, Germany) are artists and disability activists living with quadriplegia and regularly work with technologies such as robotic arms for painting, facial recognition algorithms for music generation, and brain-controlled interfaces for flying drones (Bayerlein, 2023). Even with such a technological expertise, unfortunately, they cannot access the world of Virtual and Augmented reality – revealing that these technologies are still designed with implicit assumptions about human bodies, what HCI researchers Gerling and Spiel have also described as a “corporeal standard” (2021) (i.e. an ideal able-bodied user). 

Crip Sensorama, thus, critiquing the use of technology to “cure” disability (what disability scholar Ashley Shew also describes as technoableism (2023)) aims to flip the power dynamics by firstly making these XR technologies assistive and accessible for Christian and Eric, enabling them to interact and navigate in VR/AR environments using a set of mouth gestures parametrized and mapped on the movement of their facial muscles. Secondly, Crip Sensorama extends the limited goals of HCI of just making the technology ‘accessible’ to re-imagining the use of such assistive XR to act as platforms of storytelling for, about, and with people with disabilities.

Crip Sensorama thus invites the audience to enter the world of disabled artists and activists Eric Desrosiers (Montreal, Canada) and Christian Bayerlein (Koblenz, Germany) as the audience navigates, moves, and interacts in the virtual world using mouth gestures trained and parameterized on Eric and Christian.


#### Criptastic Hacking

Hence, in-order to hack these devices and make them accessible for Christian and Eric, we adopted the methodology of “criptastic hacking” (Yergeau, 2014) from disability studies. Criptastic-hacking as a methodological approach critiques technoableism (Shew, 2023) and instead harnesses and draws on the long history of hacking and tinkering performed by disabled people to navigate in an inaccessible world. 

{{< vimeo 892184268>}}[Eric Desrosiers using his chin, tongue, mouth to operate a robotic arm to paint]

Eric has been using the joystick called Jouse3 for a decade now to operate his computer where he drags, drops, clicks, and can select any folder or button on the user interface. However, with this long practice of using these devices using just the mouth, Eric has also developed a lot of dexterity in his facial muscles - enabling him to operate these devices with much ease and comfort (like any non-disabled user). Therefore, taking this into account, instead of making XR assisitve by using high-cost eye-tracking enabled headsets (common in HCI), we built on the existing embodied knowledge of Eric's body -  the proprioception of his mouth gestures. 

##### Testing Facial Landmark Detection Algorithms to develop mouth-enabled gestures to navigate 360-degree in VR (without a VR headset)

Hence, I tried many facial recognition algorithms that could capture mouth-related gestures. Finally, fixing on the open-source face-mesh-landmark detection algorithm provided by google-media-pipe. The algorithm can detect 478 3-dimensional markers on the face (e.g. markers on the upper lip, lower lip and around the eyes). Later, I designed customized statistical algorithms to map movement of the mouth gestures to change point of view in VR (rotate clockwise and anti-clockwise) - solely through movement of facial muscles and rotation of the head. For example, opening of the mouth (detected by using difference in the (x,y,z) coordinates of the markers on the upper and the lower lip) to rotate clockwise inside the VR environment. 

	Note: Firstly, we tested the algorithm without wearing the VR headset.

{{< vimeo 913434337 >}}

##### Testing Facial Landmark Detection AlgorithmsF using a paper FaceMask (with a VR headset)

I tested Facial Landmark Detection Algorithms on my own face while wearing the VR headset Quest 2. Since the occlusion of the eyes, would not let the algorithm work, artist Yesica Duarte suggested the use of paper masks on the headsets (Angelina Jolie's face) while we run the face-mesh detection algorithm. Surprisingly, even with lower part (beneath the nose) cut, the face-mesh detection algorithms works pretty well and extrapolates Angelina Jolie's face. Hence, merging the user face (exposed) with that of Angelina Jolie.

{{< vimeo 913473853 >}}

##### Limitations of using computer vision Facial Landmark Detection Algorithms

While the paper facemasks worked even with a VR headset on, I faced the following limitations:

{{< vimeo 913965563 >}}

1. The user has to face the camera at all the times for mouth gestures to work, hence, restricting the users to use VR headsets in a 360 degree way.
2. The customized statistical algorithms detecting the mouth gestures are sensititve to the depth, that is, the distance of the VR user from the camera. 
3. While the facemasks work on Quest 2 which doesnot have front facing cameras on the front body of the device), facemasks will have to be adapted to different headsets such as Quest 3 which have depth cameras on the face of the device. 

##### Exploring HTC Vive Face Tracker for a mouth and lip tracking technology

In order to overcome limitations of the facemask implementation on the Quest 2 headset, I tried to explore a facetracker provided by another VR company called HTC Vive. 

{{< vimeo 913966324 >}}[Artist Cristo Riffo as a user using the HTC Vive tracker to replicate his mouth movements onto a face avatar]

##### Eric using facial microgestures to move and navigate in VR (with HTC Vive Face Tracker)

While, the tracker is often sold with its motivation to replicate movements onto a virtual avatar while using VR chat rooms, we hacked it for own purposes. For example, We utilized the internal 34 categories of mouth gestures recognized by an in-built machine learning classification algorithm in SDK of the face tracker. Some examples of these classes of gestures included “mouth open”, “jaw left”, jaw right”, “tongue out” etc.  Overall, according to preferences of Eric and Christian we optimized a final set of gestures and adapted the code to enable Eric and Christian navigate and interact in VR. For example, while Eric preferred “mouth open” gesture to rotate 360-degree clockwise and “tongue out” gesture to move forward in the virtual scene, the “tongue out” gesture could not work for Christian due to the malocclusion of his teeth. Hence, making XR assisitve by integrating an uncommon input modality of mouth gestures to navigate and interact in VR. 

{{< vimeo 916294164 >}} [Eric using mouth gestures to move forward, backward, and rotate in VR]

##### Using assistive XR for storytelling

Thinking of accessibility as an end goal and not as a continous process is very common within the discipline of Human-Computer Interaction. Hence, inorder to provoke this ideology, we propose to take this project beyond just making XR accessible but as mediums of storytelling with and for people with disabilitites -  enabling disabled communities to shape their own future imaginaries using assisitve XR.

Using 360 degree videos, spatialized sounds, interactive mouth gestures to navigate and interact in a world that continously shifts between VR and AR, I along with Eric and Christian developed 10-15 min XR experiences where audience unfolds this experience using the mouth gestures mapped and parametrized on Eric and Christian - using the tongue, the chin, the gaps between the upper and lower lip. You can find more about in on my website with titled 1) Crip Sensorama: Eric's Paintings and 2) Crip Sensorama: Christian's Coffee. 

Please find this video where I talk in detail about the methods, practices and making  of crip sensorama in Dr. Desiree Foerster's course at University of Chicago, US. 

{{< vimeo 1074238170 >}} [Crip Sensorama - Methods, Practices, and Thoughts (in the making)]

I also wanna do a big shout out to many friends and collaborators without whom this work could not come into its full functionality and framing. Artist Yesica Duarte (PhD student at IT:U, Linz, Austria); Luke Franzke (PhD student at ZHdK, Switzerland); Artist Timothy Thomasson (independent artist in Montreal, Canada); NOTAAT (a collective that I share with Artist Kaldi Moss, independent artist in New Delhi, India)

[1]: /img/Projects/CripGestures/MetaVerseImaginary.png
[2]: /img/Projects/CripGestures/mallofthemetaverse.jpg
[3]: /img/Projects/CripGestures/EricDisabled.png
[4]: /img/Projects/CripGestures/AbleistAssumptions1.png
[5]: /img/Projects/CripGestures/XR_Access.jpg
[6]: /img/Projects/CripGestures/Figure_TongueOut.jpg
[7]: /img/Projects/CripGestures/MainFigure3.png
[8]: /img/Projects/CripGestures/Eric_Cabin.jpg
[9]: /img/Projects/CripGestures/User1.jpg
[10]: /img/Projects/CripGestures/Christian_Cabin.png
[11]: /img/Projects/CripGestures/User3.jpg

---
title: Links
layout: default
category: EN
---
**App Links**

[Home](https://www2-vd.younow.com)

[Live Profile](https://www2-vd.younow.com/QA1qwwwwwwwwwwwwwwwwwwwww)

[Live Broadcast](https://www2-vd.younow.com/YounowIsrael/6034571/139/y4PbGRv/b)

[Archive Broadcast](https://www2-vd.younow.com/mr.clown/6034274/8/1043/b)

[Offline Profile](https://www2-vd.younow.com/OzanAdiguzel)

[Post](https://www2-vd.younow.com/Hungry4Wormssssssssssssss/3365/139/113/p)

[Tag](https://www2-vd.younow.com/explore/dj)

[Search](https://www2-vd.younow.com/explore/?q=dj)

[Explore](https://www2-vd.younow.com/explore)

[Partners](https://www2-vd.younow.com/partners)

**Static Links**

These links should pass through to Safari (openURL)

[About](https://www2-vd.younow.com/about)

[Jobs](https://www2-vd.younow.com/jobs)

[Press](https://www2-vd.younow.com/press)

[Android](https://www2-vd.younow.com/app/android) / [iPhone](https://www2-vd.younow.com/app/iphone)

**Github Links**

Reformat and open in a webview

/policy/en/rules = http://younow.github.io/policy/en/rules

[Rules](https://www2-vd.younow.com/policy/en/rules)

[Info](https://www2-vd.younow.com/info/en/manycam)

**Tracked Links**

Save the referralCode (v=) as field5 in arrival event

[Tracked Profile](https://www2-vd.younow.com/OzanAdiguzel?v=oi3hf33n)

[Tracked Home](https://www2-vd.younow.com?v=h3r43o)

**Tracked Links with UserId**

Sometimes we will want a tracked link to home or profile, that also includes the fromUserId, so that we can personalize the landing ("Peter invited you, chat with him!"). These look like regular deeplinks, but with 0 for the profile or entityID:

younow.com/{profile}/{entityID}/{fromUserID}/{referralCode}

younow.com/0/{entityID}/{fromUserID}/{referralCode} >> Load profile

younow.com/0/0/{fromUserID}/{referralCode} >> Load home

[User Link to Home](https://www2-vd.younow.com?v=h3r43o)

[User Link to Profile](https://www2-vd.younow.com/OzanAdiguzel?v=oi3hf33n)

Note: Personalized landings are not yet implemented on any platforms, but these links will soon be out in the wild, so important to load the right page and correctly save the referral code.




# The Probability of a Total Solar Eclipse

## Total Solar eclipses, a coincidence?
This past Monday, April 8th, I had the pleasure of witnessing my first total Solar eclipse. Total Solar eclipses are rare, happening every one to two years somewhere around the globe. Rarer yet are total Solar eclipses whose path of totality happens to fall over North America, with the next total Solar eclipse in Canada set to occur in 2044.

Being a student of Physics and in general an awe-inspired observer of all things Cosmos, when I heard the path of totality was just a short jaunt from Toronto — where I study — I knew I had to make the pilgrimage. On Monday morning my roommate and I took a train down to McMaster University to bear witness to the few-in-a-lifetime astronomical spectacle (see Fig 1).

As we eager observers waited in a long line to be admitted to McMaster’s football stadium for the viewing, we shared various tidbits and factoids about eclipses. One that piqued my interest was that the Sun is approximately 400 times larger than the Moon but is also 400 times further in distance from Earth, leading to the seeming coincidence that the Sun and the Moon have similar sizes from the perspective of an observer on Earth. If the Moon were any smaller we would only ever see partial eclipses, and if it were larger we would still have total eclipses, but they may not have the same dazzling phenomena — like Baily’s Beads and the Diamond Ring effect — that make the rare total eclipses so special.

So what exactly are the odds of an Earth-like planet having a moon just the right size and just the right distance to allow for total Solar eclipses? Mars has two moons — Deimos and Phobos — which also transit the Sun as seen from Mars’ surface, but are too small to lead to total Solar eclipses. Mercury and Venus haplessly don’t have any moons for a Solar eclipse to be possible, and planets beyond Mars are so far from the Sun that most of their accompanying moons have an apparent size in the sky much larger than required for the eclipse phenomena we see on Earth.

Therefore, the Earth seems to be in quite the privileged position to have such an exceptional moon. Not only are we in the Goldilocks zone that makes life sustainable, but we also appear to be in a Goldilocks zone to be witness to an extraordinarily rare astronomical event!

Now, before you start making claims about fine-tuning, intelligent design, and providence, let’s put on thinking caps and see if we can come up with a rough estimate for the probability of an Earth-like planet having a moon that is just the right size for a total Solar eclipse.

<img src="/public/images/eclipse-img.jpg" alt="eclipse" width="500px" /> 

*Fig 1: Total Solar eclipse taken at McMaster University on April 8th, 2024 by Adam Smith-Orlik.*

## Setting up the problem
A full, astronomically rigorous, account of this question would require a great deal more effort and expertise than I am willing and able to offer. However, with some basic assumptions, we can get a pretty good handle on the problem. As I go I will be sure to point out any assumptions and simplifications.

The problem of determining the probability that a moon orbiting the Earth has a specific size and orbits at a particular distance is fundamentally a problem of determining what combinations of size and distance of a moon are astrophysically possible. Notice that this is different from asking whether such a moon could actually occur on the basis of the formation history, evolution, and complex orbital dynamics of our Solar System. Instead, I will be asking the simplified question: assuming all moons that are astrophysically possible can occur for an Earth-Moon-Sun system, what is the probability that one of these moons (or many) has the right apparent size for a total Solar eclipse?

When calculating probabilities it is often useful to have a probability distribution. A probability distribution assigns weights to all possible outcomes, quantifying the likelihood of each event or occurrence. In this case, to simplify the problem, I will use a uniform probability distribution. This just means that, in absence of knowledge about which moon combinations are more or less likely, I will just assume that they are all equally likely to occur.

The final assumptions are that the moon follows a circular — not elliptical, as is more typical — orbit, and that the moon has the same density as the Earth’s Moon. The former is a minor assumption that doesn’t affect the main thrust of the analysis, while the latter could be a significant confounding factor. As will be seen, the density of the moon figures in the Roche limit equation that defines the minimum orbit. If a moon’s (note the small “m”) density varies significantly from the Moon’s density the limits on the orbital distance would need to change, potentially expanding the parameter space of possible moons. Therefore, the result from this analysis can be seen as a rough estimate at best.

## The problem
With the assumptions spelled out, the first step is to define reasonable limits for the orbital distances and masses of moons. These represent moons that are not physically precluded and could have come into existence had the formation history of the Earth-Moon system been different.

First, the orbital distance: The range of allowed orbital distances encompasses those distances at which a moon can orbit the Earth stably without being tidally ripped apart by Earth’s gravity, or gravitationally captured by another celestial object. The lower limit to a stable orbit is given by the _Roche limit,_ defining the distance at which Earth’s gravity would overcome the self-gravity of a moon and tear it apart. The upper limit is given by the _Hill sphere,_ which defines the sphere of gravitational influence between a two- and three-body system, within which orbits are stable from being gravitationally dislodged by a third body, in this case the moon being stripped away by the Sun. These two equations read,

\\[
R_{Roche} = R_E  \left(\frac{\rho_E}{\rho_M}\right)^{1/3}
\\]

*Eq 1a: Roche limit for the Earth-Moon system.*

\\[
R_{Hill} = \frac{1}{2} D_S \left(\frac{M_E}{3M_S}\right)
\\]
*Eq 1b: Hill radius for the Earth-Sun system.*

where all the parameters in this case — since I am assuming constant density for the moons — are constant, and the factor of a half in front of the Hill radius accounts for orbital stability being favoured within 50% of the Hill radius. This gives the range for orbital distances for the Earth-moon system as [9480–748208]km. The actual orbital distance for the Moon is 363300km (as the closest point in its elliptical orbit), or, just about halfway between the limits that I’ve chosen.

Next, I want reasonable bounds on the size that a moon can be. Too small and the moon is no longer a moon but just orbiting space rock; too large and you have a binary planet system. For the upper limit on the mass of a moon I take the mass of a moon if its diameter were no larger than half the diameter of Earth. Using the Moon’s density this leads to a moon with only ~8% the mass of Earth, which is reasonable considering that Charon, Pluto’s moon, has a mass ratio of 12%. On the lower end, we take as a proxy the moon with the lowest mass ratio for a terrestrial planet in the Solar System, Deimos, one of Mars’s two moons, which has a mass of about 2.3x10^-7% that of Mars. The Moon itself has a mass of 1.2% that of Earth’s, which puts it on the higher end of this range. However, it is well known that the Moon is atypically large for terrestrial moons; in fact, Earth has the largest Moon by mass ratio behind Pluto in the Solar System. Therefore, the mass range considered for this analysis is [2.3x10^-7-8]% the mass of Earth.

Equipped with distance and mass ranges, the only thing left to do is calculate the apparent size of moons at each combination of distance and mass and find those that meet the criteria for a total Solar eclipse. The exact criteria is also up for some interpretation. The apparent size, given by the formula,
\\[
\\theta_A = 2 \\arctan\\left( \\frac{r}{d} \\right),
\\]
*Eq 2: Apparent size of a moon with radius, r, at a distance from Earth, d.*

determines the size, in degrees, that the celestial object takes up in the sky. The Moon has a slightly elliptical orbit meaning that it is sometimes closer and sometimes further from Earth. The condition for a total Solar eclipse only occurs when the Moon is closest to Earth, called perigee. At perigee the Moon has an apparent size of 0.55° while the Sun has an apparent size of 0.53°. This slight difference indicates that the apparent size need not be exactly equal for there to be a comparable total eclipse to the one seen in the Earth-Moon-Sun system. To take a conservative estimate, assuming that the Moon is near the upper limit to retain all the interesting eclipse phenomena, then the tolerance on the apparent size can be taken as plus or minus the difference in the Moon and Sun apparent sizes. (It will be shown soon that the probability depends sensitively on the tolerance chosen for the apparent sizes that lead to a total Solar eclipse.) Moreover, when the Moon is furthest from Earth, apogee, the apparent size is 0.50°, which leads to annular eclipses, not total eclipses. So, choosing the range [0.52–0.55]° appeears reasonable.

## Results

For all possible moons — all combinations of distance and mass — I calculated the apparent size as seen from Earth. In Fig. 2 the log of the apparent sizes are plotted on a contour map of all possible distances and radii (substitute for mass given constant density) for the possible moons. In this colour scheme yellow corresponds to large apparent sizes (1.5 →~31°) and blue corresponds to small apparent sizes (-2.5 →3.2x10^-3°). The black dashed line represents the apparent size of the Sun, -0.27 in log units, and the gray band represents the tolerance mentioned above.

<img src="/public/images/apparent.png" alt="apparent" width="500px" /> 

*Fig 2: Contour plot for the apparent size of all possible moons mapped onto a grid of orbital distance and radius of moon. The contour colours correspond to the log of the apparent sizes.*

Since I assume a uniform probability on all possible moons, calculating the probability that a possible moon has a total Solar eclipse amounts to simply counting the number of moons that fall within the tolerance band and dividing over the total allowed moons. Doing so yields the surprising (to me!) result of 3.78%. **About 4% of moons in this simple analysis will yield a moon with a total Solar eclipse similar to the Moon!**

I’d be remiss not to mention the obvious limitations of this simple analysis. For one, this analysis does not take into account the possibility that an Earth-like planet simply fails to capture or have a moon. I didn’t look into what proportion of known exoplanets have moons. But if you look only at the Solar system, Mercury and Venus do not have moons. This implies that not all planets need have moons. What’s more, the number of moons a planet has is likely some function of mass, distance from star, complex formation history, and environmental effects. I neglect these complexities entirely and assume an Earth-like system that is certain to have one moon (and one moon only).

Further, the tolerance I chose was fairly conservative on the upper end. Presumably, larger apparent sizes would also lead to fanciful total Solar eclipses. However, I could find no reference for an upper limit so figured I’d use what I knew for sure was a total Solar eclipse — the Moon’s apparent size at perigee. Of particular note, however, is that the final probability depends strongly on the tolerance you choose. If you double the tolerance you double the probability, and vice-versa for tightening the tolerance.

Moreover, the range of stable orbits I considered is also necessarily simplistic. The Hill radius is just a rough estimate based on a simplified three-body model that neglects effects due to other celestial bodies in the Solar System. Also, the Roche limit is just a proxy for the shortest stable orbital distance and itself depends on the composition of the moon. In reality, it might be highly improbable to find actual moons anywhere near this lower limit.

## Conclusions

Notwithstanding the obvious limits of this simplistic analysis, the ballpark result — to be taken with a large grain of salt — provides an interesting estimate for the probability of finding yourself on an Earth-like planet with a moon that is just the right size and distance to Earth to allow for the experience of a total Solar eclipse. If you trust the results, there is about a 4% chance that the moon of an Earth-like planet will meet the criteria for a total Solar eclipse.

So there we go, the next time someone busts out this fact to impress you with such miraculous coincidences, you can plainly reply “Well, it’s only about 4% probability.” Or just say “cool” and don’t be a buzzkill!

Finally, I’ll leave you with an animation of what the possible moons I considered in this analysis would look like as seen from Earth.

<img src="/public/images/visualize-eclipse.gif" alt="gif" width="500px" /> 

Feel free to fork the public GitHub I used to make these plots and figures: [https://github.com/AdamSmithOrlik/eclipse_probability](https://github.com/AdamSmithOrlik/eclipse_probability), or check out the main post on [Medium](https://medium.com/@asorlik/the-probability-of-total-solar-eclipses-f829363906c8).
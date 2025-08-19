# Algorithmic Alignment: An AI Vote Compass

_The following outlines the Motivation, Methods, and Results of a custom political voting compass that I made using AI, Python, and Streamlit. To view and take the survey_ [**click here**](https://2025-voting-compass.streamlit.app/)**.**

_If you found this compass helpful, consider supporting projects like this by_ [**buying me a coffee**](https://buymeacoffee.com/adamsmithorlik).

**_Edit:_** In the final update as of April 24, 2025, I have updated all the party position data based on the official 2025 party platforms. Prior to the survey the user has the option to use the Platform 2025 Data or one of the two now-deprecated datasets.

## Motivation 
The upcoming 2025 Canadian Federal Election is perhaps the most consequential in recent memory. As a physicist, I find the political landscape steeped in bias and uncertainty. When I spoke with peers I often got the sense that their votes were being cast not according to a sober assessment of their values and for the party that best represented them, but rather according to the inertial undertow of political propaganda, partisanship, and ideology.

Wanting not to be carried away by the current of political opinion and instead guided by the familiar world of facts and data, wherein I am most comfortable, I, like many Canadians, turned to the [CBC vote compass](https://votecompass.cbc.ca/survey). What better way to cut through the partisan noise and simply allow my values to speak for themselves.

As I completed the compass, I grew increasingly uneasy. Of the 30 questions, I felt informed enough to confidently answer only about half. The remaining questions were so narrow or specific that a single nuanced position could have swung my results from one end of the spectrum to the other.

What’s more, I was forced to respond on a five-point Likert scale from _Strongly Agree_ to _Strongly Disagree,_ which further smeared out any nuance. Finishing the confounding survey, I reached the results: a sparse 2D plot with **Economic** and **Social** axes — a rather thin foundation on which to base a voting decision. But no matter, there was a bonus axis in the 3D version. The third axis, **Identity**. Hardly more informative.

Leaving the compass, I wanted a better way to determine which party actually shared my values. I visited the official party websites — only to find that no 2025 policy platforms had been released, despite the election being just two weeks away. No official platforms? Then on what basis is the CBC assigning party positions? I couldn’t find any citations, quotes, or references to official documents. (**_Edit:_** Chris Selley looked into this and wrote a great [article](https://nationalpost.com/opinion/selley-cbc-vote-compass) for the National Post commenting on some of the shortcomings of the CBC compass that motivated me to make my own compass.)

It all seemed a bit contrived to me; being a physicist, I like to see how things work under the hood. So I decided to build a compass myself. That way I can be relatively certain no bias is creeping in on my end — at least not wittingly, since I am not affiliated with any party and never have been — and I can be about as sure in the math as my studies have permitted me to be.

The following describes the method of rating values, the choices of topics made, the data acquisition techniques, the definitions of distance metrics, and a brief example of the results provided when completing the survey.

## Methods
I figured that to avoid interpretation bias or pundit opinion, I could use AI to survey the internet — news stories, public statements, party platforms, and so on — to extract the positions of each major party on any topic I chose, along with citations and justifications. To quantify these positions, I defined a scale from -1 to 1, where the extremes represent opposing ideological stances and 0 represents the status quo in Canada.

I developed a framework of seven core policy categories — **Economic**, **Social**, **Foreign**, **Environment**, **Justice**, **Science**, and **Governance** — each with several subtopics. For example, under Social, I included **Healthcare**, **Education**, **DEI**, **Housing**, **Indigenous** **Rights**, and others (see below for the full list).

Rather than prompting users with hot-button or leading questions, I opted for an open-ended **value scale**, where users can place themselves freely between -1 and 1 based on their personal views. I then used AI not only to define the extreme ideological positions for each subtopic, but also to assign estimated values to each political party based on the most recent statements, news, or available platform content.

The result was a dataset of party positions for the **Liberal**, **Conservative**, and **NDP** parties. With that data in hand, I set out to define simple, transparent, mathematical metrics to indicate how close or far a user’s responses are from each party. The first metric I implemented was Euclidean Distance— a straightforward measure of proximity in the _n_-dimensional space of subtopics. The second was Cosine Similarity, which captures the directional alignment between the user’s response vector and a party’s vector in that same space. Together, these two metrics offer complementary insights: one emphasizes absolute closeness in values, the other alignment in orientation.

I also wanted to add the ability for the user to weight the importance of each topic in a way that they could identify closeness or alignment if only one or two topics were very important while being free to weight all topics equally. Adding the weights is simple enough, and it leads to the following definitions for the distance metrics.

1. Weighted Euclidean Distance 

\\[
\mathcal{D}_t = \sqrt{\sum_i \omega_i \cdot \left(U_i - P_i \right)^2 } \\; , 
\\]

where  \\( D_t \\)  is the total distance per topic, omega is the user’s assigned weight, \\( U \\) is the user value,  \\( P \\) is the party value, and  \\( i \\) traverses the subtopics within each topic. To then get a single-valued number representing the total distance across all topics we simply sum the squared subtopic distances, i.e.,

 \\[
\mathcal{D}_t = \sqrt{\sum_t \mathcal{D}_t} \\; .
\\]

Since the maximum separation between -1 and +1 is 2, _D_ total is divided by 2 so the final result is always between 0 and 1.

2. Cosine Similarity 
\\[
\mathcal{CS}_i = \cos\theta = \frac{\sum_i \omega^2_i U_i \cdot P_i}{\sqrt{\sum_i \omega^2_i U^2_i}\cdot \sqrt{\sum_i \omega^2_i P^2_i}} \\; , 
\\]
where \\(\mathcal{CS}_i\\) is the cosine similarity across each topic. To obtain an overall similarity score across all topics, I simply sum the per-topic values,
\\[
\mathcal{CS}_t = \sum_t \mathcal{CS}_i \\; ,
\\]
where I avoid squaring in order to preserve sign. Negative values reflect ideological misalignment.

In both, the weights are globally normalized to ensure that the total result lies between [0,1] for the Euclidean distance and [-1,1] for the Cosine Similarity.

Equipped with distance metrics all I had left to do was provide my own data and calculate these metrics along with some visualizations to aid the interpretation.

## Topic Choice 
The following topics were broadly chosen with the help of prompting GPT to cover the entire field of political opinions that might be relevant to Canadian politics in 2025. As an example, abortion was left out due to there being no real pro-life party in Canada; although it can be argued that a pro-life person might feel more at home in one or another camp. However, there was a trade-off to be made with how many topics I could expect a person to slog through. Importantly, if anyone finds the list overly verbose, they are free to set the weights to redundant questions to zero. The following is a complete list of the topics/subtopics to which a user will assign a value and weight in the survey:

1. **Economic Policy**  
     _— Fiscal Policy  
     — Taxation  
     — Minimum Wage  
     — Spending  
     — Labour Policy_
2. **Social Policy**  
     _— Healthcare  
     — Education  
     — Curriculum Control  
     — Housing  
     — Immigration  
     — Indigenous Rights  
     — LGBTQ+ Rights  
     — Homelessness and Drug Addiction  
     — Diversity, Equity, and Inclusion_
3. **Foreign Policy**  
     _— Military Spending  
     — Foreign Aid  
     — Trade Policy  
     — Israel/Palestine  
     — Ukraine/Russia  
     — Refugees and Border Control_
4. **Environment**  
     _— Emissions  
     — Carbon Tax  
     — Fossil Fuels  
     — Green Investment_
5. **Justice and Civil Liberty**  
     _— Criminal Justice  
     — Free Speech  
     — Religious Liberty  
     — Police Reform_
6. **Science and Technology**  
     _— Research Funding  
     — AI Regulation  
     — Internet Access  
     — Privacy and Data Protection_
7. **Governance**  
     _— Electoral Reform  
     — Government Transparency  
     — Federalism_

For each of the topics and subtopics listed above, I asked ChatGPT to generate brief, unbiased descriptions of the extreme positions — free of loaded or ideologically charged language. I then prompted three different AI models — **ChatGPT**, **Claude**, and **Perplexity**— to independently research the current positions of Canada’s major political parties and assign each one a score between -1 and 1 on every subtopic.

To improve robustness and reduce potential model-specific bias, I aggregated the results by averaging the scores across the three models, producing a single, composite dataset for each party. Additionally, I reviewed the model outputs for any large discrepancies. In the few cases where significant disagreements emerged, I re-prompted the models and asked them to justify their scores. These discrepancies typically stemmed from a misinterpretation of the defined extreme positions and were resolved on a case-by-case basis by providing clearer context or clarification in the prompt.

**_Edit:_** In the interest of greater transparency, I have added a dataset with positions using OpenAI’s API with a fixed, reusable prompt and saved all of the results to my [GitHub](https://github.com/AdamSmithOrlik/2025-voting-compass/tree/main) in the folder GPT-API. In an April 16th, 2025 update, I added the option to use the original aggregated data or the GPT-API data (checkbox prior to survey). Users will notice that these data differ. Namely, many positions for all three parties defaulted to a score of zero if GPT was unable to find recent comments or sources to substantiate assigning a score. The original aggregated data was collected following a long back-and-forth with prompts that encouraged the models to find party positions even if it had to pull from older party positions or sources. For users concerned with transparent data, I recommend using the GPT-API data.

## Results  
I then created a user dataset that mirrors the structure of the party datasets, but with added weights to reflect the importance assigned to each subtopic. Using the previously defined distance metrics, I calculated the degree of closeness or alignment between the user’s responses and each party’s positions, both at the subtopic and topic levels.

These values indicate how closely your views align (or misalign) with the positions of the three major parties. They form the core of the analysis: if you trust the math and the data acquisition methods, the results speak for themselves.

That said, for the more visually inclined, I’ve included a number of plots to aid interpretation. The examples below show some of the results and visualizations generated by the app, based on randomly selected answers:
1. Total Distance Results 
<img src="/images/distance-metrics.png" alt="distance" width="500px" /> 
_Figure 1: Total weighted Euclidean Distance and Cosine Similarity. The left column shows the total Euclidean distance where the number closest to zero represents the party whose positions are closest to your own. The right column shows the Cosine Similarity where a positive number represents alignment, with one being perfect alignment, and vice versa for negative values. In this example the two methods returned different results for the closest party. This can happen in instances where most of your positions are moderate (nearer to liberal view) but the few extreme positions you have are more aligned with another party (NDP here)._

2. Per-Topic Distance Results 
<img src="/images/per-topic-distance.png" alt="ptdist" width="500px" /> 
_Figure 2: Shows the resulting Euclidean Distance (ED) and Cosine Similarity (CS) for each topic and the party to which your positions are closest._

3. Numberline Plots 
<img src="/images/numberline.png" alt="numline" width="500px" /> 
Figure 3: Example numberline plots for Economic policy showing how your answers compare to the aggregated positions for each political party. These numberlines do not include weights.

4. Radar Plot 
<img src="/images/radar.png" alt="rad" width="500px" /> 
Figure 4: Radar plot showing the weighted average position value across each topic compared to the party positions. Here the center point would represent -1 for all subtopic questions and the outer ring represents +1 for all subtopic positions.

5. PCA Plots 
<img src="/images/pca.png" alt="pca" width="500px" /> 
Figure 5: 2D unweighted PCA plot representing your data along two principle components that explain the most variance in the data. The principle components might be interpretable as some political dimension like Economic, Social, etc. but it is better to think of the result simply being in an abstract space that captures party differences. Due to abstraction, it is important to interpret these cautiously.
<img src="/images/pca3d.png" alt="pca3" width="500px" /> 
Figure 6: Same as Figure 5 but with three principle components. Here it appears more obvious that the user vector’s (black arrow) tip is closest to liberal, as indicated by the Euclidean distance result, while the direction of the vector is pointing closer to the direction of the NDP (orange) vector, as indicated by the cosine similarity result.

## Conclusions 
There are a number of cautionary notes I outlined in the introduction of the app, and I restate them here:

- I am not a political scientist, and this compass is not intended to be a definitive measure of your political beliefs or values. It is simply a tool to help you better understand your own views and how they compare to those of Canada’s major political parties.
- The compass is not a substitute for meaningful political engagement and should not be used as the sole basis for making voting decisions.
- The compass uses AI to estimate party positions, which may not always be accurate or up-to-date. The tool is not affiliated with any political party and does not endorse any candidate or platform.
- The compass is based on a limited set of topics and subtopics, and may not fully capture the depth and complexity of your political identity.
- Despite every effort to remain unbiased, the tool may still reflect limitations or biases in the data sources used to estimate party positions, or in my own choices regarding which topics to include.
- Making a responsible voting decision involves many factors. I created this tool as part of my effort to fulfill a civic duty: to make the most informed decision I can. I hope it helps you do the same.

In summary, I built this tool to better understand how my personal views align with the platforms of Canada’s political parties ahead of the 2025 federal election. As citizens in a democratic society, we each carry the responsibility of making informed choices. If this app can support even a small part of that process for others, then it has served its purpose.

**If you found the app useful please consider sharing it to help others make an informed decision in the upcoming 2025 Canadian Federal Election.**
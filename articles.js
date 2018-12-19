var home = `<p>This document contains the principles, rules, and guidelines for writing consistent content for the Company's web channels. It started as a fork of MailChimp's style guide but was then tailored to address ecommerce and web needs.</p>
      
<p>The articles listed under "General" contain patterns that usually apply to all forms of content. Those listed under "Technical" are specific to a particular subject and may contain exceptions to some of the general rules and principles.</p>

<p>If you're pressed for time, read the <a onclick="app.switchTopic(2)">TL;DR</a> and <a onclick="app.switchTopic(8)">Writing about Products</a> articles for a quick overview.</p>`;

var tldr = `<p>This style covers several subjects in depth. It may be more information than you need. Here are the most important things to know.</p>

<h3>Principles</h3>
<p>Good content is:</p>
  <ul>
    <li>Clear</li>
    <li>Useful</li>
    <li>Friendly</li>
    <li>Appropriate</li>
  </ul>

<h3>Voice and Tone</h3>
<p>The Company's voice is:</p>
  <ul>
    <li>Professional</li>
    <li>Sales-oriented</li>
    <li>Conversational</li>
    <li>Detailed</li>
  </ul>
<p>Our tone changes depending on the situation, but it's generally business casual. We value clarity over entertainment, and we generally seek to promote products by translating their features into applicable benefits.</p>

<p>Our priorities are to educate our customers about our products without patronizing or confusing them, so they can get their work done and get on with their lives.</p>

<p>Related resource: <a onclick="app.switchTopic(4)">Voice and Tone guide</a>.</p>

<h3>Writing about People</h3>
<p>We write with a person-first perspective. Being aware of the impact of your language will help make the Company a better place to work and a better steward of our values in the world.</p>
<ul>
  <li>Don't reference age or disability unless it's relevant to what you're writing.</li>
  <li>Avoid gendered language; use the singular "they" if appropriate.</li>
  <li>When writing about a person, use their preferred pronouns; if you don't know those, just use their name.</li>
</ul>
<p>Related resource: <a onclick="app.switchTopic(7)">Writing About People</a>.</p>

<h3>Grammar and Mechanics</h3>
<ul>
  <li>Some people will read every word you write. Most will just scan. Help everyone by grouping related ideas together and using descriptive headers and subheaders when applicable.</li>
  <li>Focus your message and create a hierarchy of information. Lead with the main point or the most important content.</li>
  <li>Use active voice and positive language.</li>
  <li>Use short words and sentences.</li>
  <li>Avoid unnecessary modifiers.</li>
  <li>Use specific examples.</li>
  <li>Avoid vague language.</li>
  <li>Be consistent. Use similar pieces of content as a guideline (survey multiple examples to see what the majority trend tends to be).</li>
  <li>Feel free to use contractions.</li>
  <li>Use the serial (Oxford) comma.</li>
  <li>Don't use underline, and don't use any combination of italic, bold, and allcaps.</li>
  <li>When in doubt, read your writing out loud.</li>
</ul>

<p>Related resource: <a onclick="app.switchTopic(5)">Grammar and Mechanics</a>

<h3>Web Content</h3>
<ul>
  <li>Organize your page around one topic.</li>
  <li>Use clear, descriptive terms that relate to the topic in titles and headings.</li>
  <li>Give every image descriptive alt text.</li>
  <li><strong>Buttons</strong> should always contain actions. The language should be clear and concise. Use Title Case.</li>
  <li>Use sentence case for <strong>checkboxes</strong> and <strong>radio buttons</strong>.</li>
  <li>Use title case for <strong>drop-down menu names</strong> and <strong>menu items</strong>.</li>
  <li>Use title case for <strong>form titles</strong> and <strong>form fields</strong>. Only request information that we need and intend to use. Don't ask for irrelevant personal information.</li>
  <li>Use title case for <strong>headings</strong> and sentence case for <strong>subheadings</strong>.</li>
  <li>Organize headings and subheadings in a hierarchy, with the heading first, followed by subheadings in order.</li>
  <li>Include the most relevant keywords in your headings and subheadings.</li>
  <li>Provide a link whenever you're referring to a website, relevant content, or trusted external resources.</li>
  <li>Don't say things like "Click here!" or "Click for more information" or "Read this." Instead, link relevant keywords.</li>
  <li>Use lists to present steps, groups, or sets of info. Set up your list with a brief introduction. Number lists when the order of information is important.</li>
</ul>

<h3>Writing for Accessibility</h3>
<ul>
  <li>Create a hierarchy, with the most important information first.</li>
  <li>Place similar topics in the same paragraph, and clearly separate different topics with headings.</li>
  <li>Use plain language. Write short sentences and familiar words.</li>
  <li>Links should provide information on the associated action or destination. Avoid saying "click here" or "learn more."</li>
  <li>Avoid using images when descriptive text will do.</li>
  <li>Avoid directional instructions or language that requires the reader to see the layout or design of the page.</li>
  <li>Label inputs on forms with clear names and use appropriate tags. Think carefully about what fields are necessary, and especially which ones you mark as required.</li>
</ul>

<h3>Writing for translation</h3>
<ul>
  <li>Use active voice.</li>
  <li>Avoid double negatives.</li>
  <li>Use contractions with caution.</li>
  <li>Avoid using synonyms for the same word in a single piece of writing.</li>
  <li>Write briefly, but don't sacrifice clarity for brevity.</li>
  <li>Avoid slang, idioms, and clich&eacute;s.</li>
  <li>Avoid unnecessary abbreviations.</li>
</ul>`;

var writingPrinciples = `<p>With every piece of content we publish, we aim to:</p>

<ul>
  <li><strong>Educate.</strong> Tell readers what they need to know, not just what we want to say. Provide the exact information they need, along with opportunities to learn more. Remember: you're the expert, and readers don't have access to everything you know.</li>
  <li><strong>Empower.</strong> Help people understand what they're looking at by using language that informs them and encourages them to get the most out of our products.</li>
  <li><strong>Guide.</strong> Think of yourself as a tour guide for our readers. Whether you're leading them through the website, blog, or other materials, communicate in a clear and helpful way.</li>
  <li><strong>Be honest.</strong> Understand the Company's place in our users' lives. Avoid dramatic storytelling and grandiose claims. Focus on our real strengths.</li>
  <li><strong>Respect.</strong> Treat readers with the respect they deserve. Put yourself in their shoes, and don't patronize them. Remember that they have other things to do. Be considerate and inclusive. Don't market at people; communicate with them.</li>
</ul>

<p>In order to achieve those goals, we make sure our content is:</p>

<ul>
  <li><strong>Clear.</strong> Write to be understood. Research the topic you're writing about. Use simple words and sentences.</li>
  <li><strong>Useful.</strong> Before you start writing, ask yourself: What purpose does this serve? Who is going to read it? What do they need to know?</li>
  <li><strong>Professional.</strong> Users are looking for answers, not entertainment. Write to address critical details without becoming overly technical.</li>
</ul>`;

var voiceAndTone = `<p>One way we write engaging content is by being aware of our voice and our tone. This section explains the difference between voice and tone, and lays out the elements of each as they apply to the company.</p>

<p>What's the difference between voice and tone? Think of it this way: You have the same voice all the time, but your tone changes. You might use one tone when you're out to dinner with your closest friends, and a different tone when you're in a meeting with your boss.</p>

<p>Your tone also changes depending on the emotional state of the person you're addressing. You wouldn't want to use the same tone of voice with someone who's scared or upset as you would with someone who's laughing.</p>

<p>The same is true for the Company. Our voice doesn't change much from day to day, but our tone changes to match the context.</p>

<h3>Voice</h3>

<p>The Company's voice is business casual. It's straightforward and purposeful. Our priority is to explain our products and help our users find a solution so that they can get on with their lives. We want to educate people without patronizing or confusing them.</p>

<p>One way to think of our voice is to compare what it is to what it isn't. The Company's voice is:</p>
<ul>
<li>Professional but not formal</li>
<li>Sales-oriented but not pushy</li>
<li>Conversational but not flippant</li>
<li>Detailed but not technical</li>
</ul>

<h3>Tone</h3>

<p>The Company's tone is usually professional, and it's always more important to be clear than entertaining. When you're writing, consider the reader's state of mind.</p>

<p>Are they looking for a product that will solve a problem they have? Are they confused and seeking our help on social media? Are they curious about a post on our blog? Once you have an idea of their emotional state, you can adjust your tone accordingly.</p>

<p>Informal content such as social media posts and blogs can be lighthearted, but don't go out of your way to make a joke. Forced humor can be worse than none at all. If you're unsure, keep a straight face.</p>

<h3>Style Tips</h3>

<p>Here are a few key elements of writing in the Company's voice. For more details, see the <a onclick="app.switchTopic(5)">Grammar and Mechanics</a> section.</p>

<ul>
  <li><strong>Use active voice.</strong> Avoid passive voice.</li>
  <li><strong>Avoid slang and jargon.</strong> Write in plain English.</li>
  <li><strong>Write positively.</strong> Use positive language rather than negative language.</li>
</ul>`;

var grammarAndMechanics = `<p>Adhering to certain rules of grammar and mechanics helps us keep our writing clear and consistent. This section will lay out our house style, which applies to all of our digital content unless otherwise noted in this guide. (We cover a lot of ground in this section, so use Ctrl + F if you're looking for something in particular.</p>

<p>If what you need to know is not covered here or in one of our technical guides (e.g. <a onclick="app.switchTopic(8)">Writing about Products</a>), look on our website for similar content to consider as examples and use your best judgement.</p>

<p>Treat the technical guide as more authoritative. If there is ever a contradiction between this article and one of them, go with the technical guide. Think of it in this way:</p>

<p><em>Technical Guide</em> &gt; <em>General Guidelines</em></p>

<p>Oh, and one more thing:</p>

<p><strong>We can't anticipate everything.</strong> Be ready to adapt, consult with the team, and make judgement calls.</p>

<p>At the end of the day: aim for the best you can do. AutoQuotes will import things in its own manner, manufacturers will have their own conventions, users will use strange synonyms to search for products, and we have make it all work.</p>

<p>The "rules" below are guidelines for convenience. Use them when you need a ruling. Make exceptions when necessary. To put it another way: You are free to make purposeful exceptions.</p>

<h3>Basics</h3>

<p><strong>Write for all readers.</strong> Some people will read every word you write. Others will just skim. Help everyone read better by grouping related ideas together and using descriptive headers and subheaders</p>

<p><strong>Focus your message.</strong> Create a hierarchy of information. Lead with the main point or the most important content, in sentences, paragraphs, sections, and pages.</p>

<p><strong>Be concise.</strong> Use short words and sentences. Avoid unnecessary modifiers.</p>

<p><strong>Be specific.</strong> Avoid vague language. Cut the fluff.</p>

<p><strong>Be consistent.</strong> Stick to the copy patterns and style points outlined in this guide.</p>

<h3>Guidelines</h3>

<h4>Abbreviations and acronyms</h4>

<p>If there's a chance your reader won't recognize an abbreviation or acronym, spell it out the first time you mention it. Then use the short version for all other references. If the abbreviation isn't clearly related to the full version, specify in parentheses.</p>

<ul>
  <li>First use: Network Operations Center<br>
  Second use: NOC</li>
  <li>First use: Coordinated Universal Time (UTC)<br>
  Second use: UTC</li>
</ul>

<p>If the abbreviation or acronym is well known, like API or HTML, use it instead (and don't worry about spelling it out).</p>

<h4>Active voice</h4>

<p>Use active voice. Avoid passive voice.</p>

<p>In active voice, the subject of the sentence does the action. In passive voice, the subject of the sentence has the action done to it.</p>

<blockquote>
  <em>Examples</em><br>
  <strong>Yes:</strong> Marti logged into the account.<br>
  <strong>No:</strong> The account was logged into by Marti.
</blockquote>

<p>Words like "was" and "by" may indicate that you're writing in passive voice. Scan for these words and rework sentences where they appear.</p>

<p>One exception is when you want to specifically emphasize the action over the subject. In some cases, this is fine.</p>

<blockquote>
  <em>Example</em><br>
  Your account was flagged by our abuse team.
</blockquote>

<h4>Capitalization</h4>

<p>We use a few different forms of capitalization. Title case capitalizes the first letter of every word except articles, prepositions, and conjunctions. Sentence case capitalizes the first letter of the first word.</p>

<p>When writing out an email address or website URL, use all lowercase.</p>

<blockquote>
  <em>Examples</em><br>
  info@acemart.com<br>
  acemart.com
</blockquote>

<p>Don't capitalize random words in the middle of sentences. Here are some words that we never capitalize in a sentence.</p>

<ul>
  <li>website</li>
  <li>internet</li>
  <li>online</li>
  <li>email</li>
</ul>

<h4>Contractions</h4>

<p>They're great! They give your writing an informal, conversational tone. In most cases, use them as you see fit. Just don't go overboard.</p>

<h4>Numbers</h4>

<div class="message is-warning">
  <div class="message-body">
    Careful! Product titles and descriptions have some special rules when it comes to numbers. See <a onclick="app.switchTopic(8)">Writing about Products</a>
  </div>
</div>

<p>Spell out numbers one through nine, or when it begins a sentence. Otherwise, use the numeral. Ordinals are spelled out.</p>

<blockquote>
  <em>Examples</em><br>
  Ten new employees started on Monday, and 12 start next week.<br>
  I ate three donuts at Coffee Hour.<br>
  Meg won first place in last year's Walktober contest.<br>
  We hosted a group of eighth graders who are learning to code.
</blockquote>

<p>Numbers over 3 digits get commas:</p>

<blockquote>
  999<br>
  1,000<br>
  150,000
</blockquote>

<p>Write out big numbers in full. Abbreviate them if there are space restraints, as in a tweet or a chart: 1k, 150k.</p>

<h5>Dates</h5>

<p>Generally, spell out the day of the week and the month. But, feel free to abbreviate if space is an issue.</p>

<blockquote>
  Saturday, January 24<br>
  Sat., Jan. 24
</blockquote>

<h5>Decimals and fractions</h5>

<p>Spell out common or simple fractions.</p>

<blockquote>
  <strong>Yes:</strong> two-thirds<br>
  <strong>No:</strong> 2/3
</blockquote>

<p>Use decimal points when a number can't be easily written out as a fraction, like 1.375 or 47.28.</p>

<h5>Percentages</h5>

<p>Spell out "percent" instead of using the % symbol when writing a product description or short description. Otherwise, use the symbol.</p>

<h5>Ranges and spans</h5>

<p>Use a hyphen (-) to indicate a range or span of numbers.</p>

<blockquote>
  <em>Example</em><br>
  It takes 20-30 days.
</blockquote>

<h5>Money</h5>

<p>When writing about US currency, use the dollar sign before the amount. Include a decimal and number of cents if more than 0.</p>

<blockquote>
  <em>Examples</em><br>
  $20<br>
  $19.99
</blockquote>

<p>When writing about other currencies, follow the same symbol-amount format:</p>

<blockquote>
  <em>Examples</em><br>
  ¥1<br>
  €1
</blockquote>

<h5>Telephone numbers</h5>

<p>Use dashes without spaces between numbers. Use a country code if your reader is in another country.</p>

<blockquote>
  <em>Examples</em><br>
  555-867-5309<br>
  +1-404-123-4567
</blockquote>

<h5>Temperature</h5>

<p>Use the degree symbol and the capital F abbreviation for Fahrenheit.</p>

<blockquote>
  <em>Example</em><br>
  98&deg;F
</blockquote>

<h5>Time</h5>

<p>Use numerals and am or pm, with a space in between. Generally, it's best to include the minutes, even for on-the-hour time. But, feel free to drop it if you're having trouble staying under a character limit (or need a shorter line to fit into a webpage design).</p>

<blockquote>
  <em>Examples</em><br>
  7:00 am<br>
  7:30 pm
</blockquote>

<p>Use a hyphen between times to indicate a time period.</p>

<blockquote>
  <em>Example</em><br>
  7:00 am-10:30 pm
</blockquote>

<p>Specify time zones when writing about an event or something else people would need to schedule.</p>

<p>Abbreviate time zones within the continental United States as follows:</p>

<ul>
  <li>Eastern Time: ET</li>
  <li>Central Time: CT</li>
  <li>Mountain Time: MT</li>
  <li>Pacific Time: PT</li>
</ul>

<p>When referring to international time zones, spell them out (e.g. Nepal Standard Time, Australian Eastern Time, etc.). If a time zone does not have a set name, use its <a href="https://en.wikipedia.org/wiki/List_of_UTC_time_offsets" target="_blank">Coordinated Universal Time (UTC)</a> offset.</p>

<p>Abbreviate decades when referring to those within the past 100 years.</p>

<blockquote>
  <em>Examples</em><br>
  the 00s<br>
  the 90s
</blockquote>

<p>When referring to decades more than 100 years ago, be more specific:</p>

<blockquote>
  <em>Examples</em><br>
  the 1900s<br>
  the 1890s
</blockquote>

<h4>Punctuation</h4>

<h5>Apostrophes</h5>

<p>The apostrophe's most common use is making a word possessive. If the word already ends in an s and it's singular, you also add an 's. If the word ends in an s and is plural, just add an apostrophe.</p>

<blockquote>
  <em>Examples</em><br>
  The donut thief ate Sam's donut.<br>
  The donut thief ate Chris's donut.<br>
  The donut thief ate the managers' donuts.
</blockquote>

<p>Apostrophes can also be used to denote that you've dropped some letters from a word, usually for humor or emphasis. This is fine, but do it sparingly.</p>

<h5>Colons</h5>

<p>Use a colon (rather than an ellipsis, em dash, or comma) to offset a list.</p>

<blockquote>
  <em>Example</em><br>
  Erin ordered 3 kinds of donuts: glazed, chocolate, and pumpkin.
</blockquote>

<p>You can also use a colon to join two related phrases. If a complete sentence follows the colon, capitalize the first word.</p>

<blockquote>
  <em>Example</em><br>
  I was faced with a dilemma: I wanted a donut, but I'd just eaten a bagel.
</blockquote>

<h5>Commas</h5>

<p>When writing a list, use the serial comma (also known as the Oxford comma). If the extra comma causes ambiguity, re-word the sentence.</p>

<blockquote>
  <em>Example</em><br>
  <strong>Yes:</strong> David admires his parents, Oprah, and Justin Timberlake.<br>
  <strong>No:</strong> David admires his parents, Oprah and Justin Timberlake.<br>
  <strong>No:</strong> A new essay by @NeilServen on his father, a 457-pound tuna, and the stories we leave behind after we're gone: [link] <em>(reword)</em>
</blockquote>

<h5>Dashes and hyphens</h5>

<p>Use a hyphen (-) without spaces on either side to link words into single phrase, or to indicate a span or range.</p>

<blockquote>
  <em>Examples</em><br>
  first-time user<br>
  Monday-Friday
</blockquote>

<p>Use an em dash (&mdash;) without spaces on either side to offset an aside. Use a true em dash, not hyphens (- or --).</p>

<blockquote>
  <em>Example</em><br>
  Multivariate testing&mdash;just one of our new Pro features&mdash;can help you grow your business.<br>
  Austin thought Brad was the donut thief, but he was wrong&mdash;it was Lain.
</blockquote>

<h5>Ellipses</h5>

<p>Ellipses (&hellip;) can be used to indicate that you're trailing off before the end of a thought. Use them sparingly. Don't use them for emphasis or drama, and don't use them in titles, headers, or product descriptions.</p>

<blockquote>
    <em>Example</em><br>
    "Where did all those donuts go?" Christy asked. Lain said, "I don't know&hellip;"
</blockquote>

<p>Ellipses, in brackets, can also be used to show that you're omitting words in a quote.</p>

<blockquote>
    <em>Example</em><br>
    "When in the Course of human events it becomes necessary for one people to dissolve the political bands which have connected them with another and to assume among the powers of the earth, [&hellip;] a decent respect to the opinions of mankind requires that they should declare the causes which impel them to the separation."
</blockquote>

<h5>Periods</h5>

<p>Periods go inside quotation marks. They go outside parentheses when the parenthetical is part of a larger sentence, and inside parentheses when the parenthetical stands alone.</p>

<blockquote>
    <em>Examples</em><br>
    Christy said, "I ate a donut."<br>
    I ate a donut (and I ate a bagel, too).<br>
    I ate a donut and a bagel. (The donut was Sam's.)
</blockquote>

<p>Leave a single space between sentences.</p>

<h5>Question marks</h5>

<p>Question marks go inside quotation marks if they're part of the quote. Like periods, they go outside parentheses when the parenthetical is part of a larger sentence, and inside parentheses when the parenthetical stands alone.</p>

<h5>Exclamation points</h5>

<p>Use exclamation points sparingly, and never more than one at a time. They're like high-fives: A well-timed one is great, but too many can be annoying.</p>

<p>Exclamation points go inside quotation marks. Like periods and question marks, they go outside parentheses when the parenthetical is part of a larger sentence, and inside parentheses when the parenthetical stands alone.</p>

<p>Never use exclamation points in failure messages or alerts. When in doubt, avoid!</p>

<h5>Quotation marks</h5>

<p>Use quotes to refer to words and letters, titles of short works (like articles and poems), and direct quotations.</p>

<p>Periods and commas go within quotation marks. Question marks within quotes follow logic—if the question mark is part of the quotation, it goes within. If you're asking a question that ends with a quote, it goes outside the quote.</p>

<p>Use single quotation marks for quotes within quotes.</p>

<blockquote>
    <em>Examples</em><br>
    Who was it that said, "A fool and his donut are easily parted"?<br>
    Brad said, "A wise man once told me, ‘A fool and his donut are easily parted.'"
</blockquote>

<h5>Semicolons</h5>

<p>Go easy on semicolons. They usually support long, complicated sentences that could easily be simplified. Try an em dash (—) instead, or simply start a new sentence.</p>

<h5>Ampersands</h5>

<p>Don't use ampersands unless one is part of a company or brand name.</p>

<blockquote>
    <em>Examples</em><br>
    Ben and Dan<br>
    Ben &amp; Jerry's
</blockquote>

<h5>Accents</h5>
<p>If a word could be acceptably spelled with or without an accent, spell it without an accent.</p>
<blockquote>
  <em>Example</em><br>
  <strong>Yes:</strong> I appreciate the decor in this room.<br>
  <strong>No:</strong> I appreciate the d&eacute;cor in this room.
</blockquote>

<h4>People, places, and things</h4>

<h5>File extensions</h5>

<p>When referring generally to a file extension type, use all uppercase without a period. Add a lowercase "s" to make plurals.</p>

<blockquote>
  <em>Examples</em><br>
  GIF<br>
  PDF<br>
  HTML<br>
  JPGs
</blockquote>

<h5>Pronouns</h5>

<p>If your subject's gender is unknown or irrelevant, use "they," "them," and "their" as a singular pronoun. Use "he/him/his" and "she/her/her" pronouns as appropriate. Don't use "one" as a pronoun.</p>

<p>For more on writing about gender, see <a onclick="app.switchTopic(7)">Writing about People</a>.</p>

<h5>Quotes</h5>

<p>When quoting someone in a blog post or other publication, use the present tense.</p>

<blockquote>
    <em>Example</em><br>
    "Using a combi-oven has helped our business grow," says Jamie Smith.
</blockquote>

<h5>Names and titles</h5>

<p>The first time you mention a person in writing, refer to them by their first and last names. On all other mentions, refer to them by their first name.</p>

<p>Capitalize the names of departments and teams (but not the word "team" or "department").</p>

<blockquote>
    <em>Examples</em><br>
    Marketing team<br>
    Support department
</blockquote>

<p>Capitalize individual job titles when referencing to a specific role. Don't capitalize when referring to the role in general terms.</p>

<blockquote>
    <em>Examples</em><br>
    Our new Marketing Manager starts today.<br>
    All the managers ate donuts. 
</blockquote>

<p>Don't refer to someone as a "ninja," "rockstar," or "wizard" unless they literally are one.</p>

<h5>Schools</h5>

<p>The first time you mention a school, college, or university in a piece of writing, refer to it by its full official name. On all other mentions, use its more common abbreviation.</p>

<blockquote>
    <em>Examples</em><br>
    Georgia Institute of Technology, Georgia Tech<br>
    Georgia State University, GSU
</blockquote>

<h5>States, cities, and countries</h5>

<p>Spell out all city and state names. Don't abbreviate city names.</p>

<p>Per AP Style, all cities should be accompanied by their state, with the exception of: Atlanta, Baltimore, Boston, Chicago, Cincinnati, Cleveland, Dallas, Denver, Detroit, Honolulu, Houston, Indianapolis, Las Vegas, Los Angeles, Miami, Milwaukee, Minneapolis, New Orleans, New York, Oklahoma City, Philadelphia, Phoenix, Pittsburgh, St. Louis, Salt Lake City, San Antonio, San Diego, San Francisco, Seattle, Washington.</p>

<p>On first mention, write out United States. On subsequent mentions, US is fine. The same rule applies to any other country or federation with a common abbreviation (European Union, EU; United Kingdom, UK).</p>

<h5>URLs and websites</h5>

<p>Capitalize the names of websites and web publications. Don't italicize.</p>

<p>Avoid spelling out URLs, but when you need to, leave off the http://www.</p>

<h5>Writing about the Company</h5>

<p>In most cases, we use the Company's informal name when referring to ourselves. Use its legal name only when writing legal documents or contracts. Otherwise, use the informal name.</p>

<p>Refer to the Company using first person plural pronouns and possessives ("we," "us,", "our") not third person pronouns ("it," "its", "they," "their")</p>

<h5>Writing about other companies</h5>

<p>Honor companies' own names for themselves and their products. Go by what's used on their official website.</p>

<blockquote>
  <em>Examples</em><br>
  iPad<br>
  YouTube<br>
  Yahoo!
</blockquote>

<p>Refer to other companies as "it" (not "they").</p>

<h4>Slang and jargon</h4>

<p>Write in plain English. If you need to use a technical term, briefly define it for users with less technical expertise. Common industry terms are fine to use, but beware of using too many buzzwords.</p>

<blockquote>
  <em>Example</em><br>
  The Company's ops team is constantly scaling our servers to make sure our users have a great experience with our products. One way we do this is with shards, or partitions, that help us better horizontally scale our database infrastructure.
</blockquote>

<h4>Text formatting</h4>

<p>Use italics to indicate the title of a long work (like a book, movie, or album) or to emphasize a word.</p>

<blockquote>
  <em>Examples</em><br>
  <em>Dunston Checks In</em><br>
  Brandon <em>really</em> loves <em>Dunston Checks In</em>.
</blockquote>

<p>Use italics when citing an example of an element on the website/order portal, or referencing button and navigation labels in step-by-step instructions:</p>

<blockquote>
  <em>Example</em><br>
  When you're all done, click <em>Send</em>.<br>
  Click <em>Checkout</em> to begin the checkout process.
</blockquote>

<p>Don't use underline formatting, and don't use any combination of italic, bold, and caps.</p>

<p>For product copy and blog article bodies, use left-aligned text, never centered or right-aligned. For landing pages, use your best judgement for the layout</p>

<p>Leave one space between sentences, never 2.</p>

<h4>Write positively</h4>

<p>Use positive language rather than negative language. One way to detect negative language is to look for words like "can't," "don't," etc.</p>

<blockquote>
  <em>Examples</em><br>
  <strong>Yes:</strong> To get a donut, stand in line.<br>
  <strong>No:</strong> You can't get a donut if you don't stand in line.
</blockquote>`;

var wordList = `<p>The Company's industry is rife with specialized vocabulary and various spellings. The list below includes the preferred form of some of these terms.</p>

<p>However, for on-site search and SEO purposes, working in the alternate word forms can be beneficial. Additionally, if a manufacturer uses a particular spelling variant, using that form can provide an exact match for users seeking that product.</p>

<p>Use your best judgement on when to include variants and when to stick with just one. For example, you may include variants in your description of a BBQ brush, but may only include "BBQ" when talking about a sauce cup's possible uses.</p>

<h3>Words</h3>
<ul>
  <li><strong>BBQ</strong>, not "barbecue," "Bar-B-Q," or another variant</li>
</ul>

<h3>Symbols</h3>
<p>Because these symbols occur frequently and can be a pain to look up, here are some common symbols and their corresponding HTML entity code.</p>

<table class="table">
  <thead>
    <tr>
      <th>Symbol</th>
      <th>Meaning</th>
      <th>Code</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>&trade;</td>
      <td>Trademark</td>
      <td>&amp;trade;</td>
    </tr>
    <tr>
      <td>&reg;</td>
      <td>Registered Trademark</td>
      <td>&amp;reg;</td>
    </tr>
    <tr>
      <td>&copy;</td>
      <td>Copyright</td>
      <td>&amp;copy;</td>
    </tr>
    <tr>
      <td>&eacute;</td>
      <td>Acute E</td>
      <td>&amp;eacute;</td>
    </tr>
    <tr>
      <td><br /></td>
      <td>Line Break</td>
      <td>&lt;br /&gt;</td>
    </tr>
    <tr>
      <td>&hellip;</td>
      <td>Ellipsis</td>
      <td>&amp;hellip;</td>
    </tr>
  </tbody>
</table>`;

var writingAboutPeople = `<p>Whether you're writing for an internal or external audience, it's important to write for and about other people in a way that's compassionate, inclusive, and respectful. Being aware of the impact of your language will help make the Company a better place to work and a better steward of our values in the world. In this section we'll lay out some guidelines for writing about people with compassion, and share some resources for further learning.</p>

<h3>Age</h3>

<p>Don't reference a person's age unless it's relevant to what you're writing. If it <em>is</em> relevant, include the person's specific age, offset by commas.</p>

<blockquote>
  <em>Example</em><br>
  The CEO, 16, just got her driver's license.
</blockquote>

<p>Don't refer to people using age-related descriptors like "young," "old," or "elderly."</p>

<h3>Disability</h3>

<p>Don't refer to a person's disability unless it's relevant to what you're writing. If you need to mention it, use language that emphasizes the person first: "she has a disability" rather than "she is disabled."</p>

<p>When writing about a person with disabilities, don't use the words "suffer," "victim," or "handicapped." "Handicapped parking" is OK.</p>

<h3>Gender and sexuality</h3>

<p>Don't call groups of people "guys." Don't call women "girls."</p>

<p>Avoid gendered terms in favor of neutral alternatives, like "server" instead of "waitress" and "businessperson" instead of "businessman."</p>

<p>It's OK to use "they" as a singular pronoun.</p>

<p>Use the following words as modifiers, but never as nouns:</p>

<ul>
  <li>lesbian</li>
  <li>gay</li>
  <li>bisexual</li>
  <li>transgender (never "transgendered")</li>
  <li>trans</li>
  <li>queer</li>
  <li>LGBT</li>
</ul>

<p>Don't use these words in reference to LGBT people or communities:</p>

<ul>
  <li>homosexual</li>
  <li>lifestyle</li>
  <li>preference</li>
</ul>

<p>When writing about a person, use their communicated pronouns. When in doubt, just ask or use their name.</p>

<h3>Hearing</h3>

<p>Use "deaf" as an adjective to describe a person with significant hearing loss. You can also use "partially deaf" or "hard of hearing."</p>

<h3>Medical conditions</h3>

<p>Don't refer to a person's medical condition unless it's relevant to what you're writing.</p>

<p>If a reference to a person's medical condition is warranted, use the same rules as writing about people with physical disabilities and emphasize the person first. Don't call a person with a medical condition a "victim."</p>

<h3>Mental and cognitive conditions</h3>

<p>Don't refer to a person's mental or cognitive condition unless it's relevant to what you're writing. Never assume that someone has a medical, mental, or cognitive condition.</p>

<p>Don't describe a person as "mentally ill." If a reference to a person's mental or cognitive condition is warranted, use the same rules as writing about people with physical disabilities or medical conditions and emphasize the person first.</p>

<h3>Vision</h3>

<p>Use the adjective "blind" to describe a person who is unable to see. Use "low vision" to describe a person with limited vision.</p>`;

var writingAboutProducts = `<p>When writing product information, the "rules" you follow will change depending on which piece of information that you are filling out. The reason for this is because the purpose of each piece of information is different.</p>
<ul>
  <li>Titles need to be human-readable and contain the most important keywords that will help them rank well in search engines.</li>
  <li>Short descriptions can help keep readers on the page.</li>
  <li>Product descriptions step in to answer a reader's questions and alert them to features and benefits (while also being used for SEO purposes).</li>
  <li>Keywords must be used to cover synonyms and imitate the phrases that users may use to search for the product</li>
  <li>And so on&hellip;</li>
</ul>

<p>The rules written here are broken down into the various fields that you will fill out for products. These rules trump any contradicting guidelines found in other articles. Be wary of the differences between each field.</p>

<h3>Title</h3>
<p>Field: <code>description</code><br>
Purpose: Help users, fuel SEO</p>

<p>Use title case when writing product titles. Special symbols like &reg; should be written in html format (<code>&amp;reg;</code>). Stainless steel should be referred to as "stainless" in product titles, but as "stainless steel" in the description.</p>

<p>Try to be as descriptive as possible so customers have an immediate sense of what the item is and also so it can be found more easily in search engines and our own internal search. To play nicely with Google Shopping, try to keep titles shorter than 150 characters (fewer than 70 characters is ideal).</p>

<p>Do not include the manufacturer, brand, SKU, MPN, or UOM in the product title.</p>

<p>Generally, the title should be ordered as follows:<br>
<code>Product Line</code>, <code>Size/Capacity</code>, <code>Color</code>, <code>Material</code>, <code>Product</code></p>

<p>Not all elements will apply to all products.</p>

<p>Units of measure should be abbreviated as follows. Do not add an "s" to make units plural.</p>
<ul>
  <li>Inches = " (e.g. 54")</li>
  <li>Feet = ' (e.g. 6')</li>
  <li>Cubic Feet = cu. ft.</li>
  <li>Yards = yd. (e.g. 12 yd.)</li>
  <li>Ounces = oz. (e.g. 12 oz.)</li>
  <li>Gallons = gal. (e.g. 1 gal.)</li>
  <li>Pounds = lb. (e.g. 15 lb.)</li>
  <li>Volts = v (e.g. 208v)</li>
  <li>Watts = w (e.g. 1000w)</li>
</ul>

<p>"Cup" is spelled out and singular when it refers to a product's capacity (preventing any possible confusion with Celsius, or the speed of light, or another measurement).</p>

<p>Gas types should be abbreviated in titles as follows:</p>
<ul>
  <li>Liquid Propane = LP Gas</li>
  <li>Natural Gas = NG</li>
</ul>

<blockquote>
  <em>Example</em><br>
  Good Grips&reg; 4.49 qt. Green Plastic Salad Spinner<br>
  54" Stainless 2 Door Reach-In Refrigerator<br>
  50 lb. Stainless LP Gas Deep Fryer
</blockquote>

<p>Format fractions using a slash. When accompanying a whole number, use a hyphen to connect the fraction.</p>

<blockquote>
  <em>Example</em><br>
  1-1/2 qt. Stainless Mixing Bowl<br>
  Safety Quik&reg; 3/4" Quick Disconnect Coupler<br>
  4-3/4" Utility Knife w/ Wood Handle
</blockquote>

<h4>"Pack of"</h4>
<p>The UOM should not be referenced in the title. However, for clarity, "Pack of" is sometimes appended to the beginning of the title. The reason for this has to do with the product's UOM.</p>

<p>If the product's selling UOM is "Each" but the product is, itself, a pack of smaller products, then "Pack of" is appended. These products are usually things like testing strips, boxed markers, and other bundled packages. This doesn't happen often, but it crops up occasionally. For example:</p>

<blockquote>
  <em>Example</em><br>
  Pack of 100 Quaternary Test Strips for Sanitizing Solution<br>
  Pack of 4 Table Cover Clips<br>
  Pack of 4 Black Plastic Drip Trays
</blockquote>

<h3>Short Description</h3>
<p>Field: <code>short_description</code><br>
Purpose: Summarize the item</p>

<p>The short description is a one line introduction to the product. The intro line shows up near the top of the page, and it also shows up in the product's quick view. It should be designed to give the customer a quick snapshot of the product. It may be the first thing the customer reads, so make it compelling!</p>

<blockquote>
  <em>Example</em><br>
  This 54-inch two door reach-in freezer offers unsurpassed quality at an incredible value.<br>
  <br>
  Remove bone and membrane from fish, poultry, beef, and more with this 6-inch boning knife.
</blockquote>

<h3>Description</h3>
<p>Field: <code>name</code><br>
Purpose: Describe items, answer questions, fuel SEO</p>

<p>The description is your chance to sell the customer. Try to be as detailed as possible. Think about what information you would want to know before buying this product. And remember: features <em>tell</em>, benefits <em>sell</em>. It may be made of stainless steel. Explain why that is a benefit.</p>

<p>Aim for a description length of 500 characters minimum (including whitespace, excluding html tags). This helps the item rank well in search engine results. Working important synonyms into the description also helps with this.</p>

<p>If an item or brand is registered or trademarked, use the symbol in the first instance. Future instances do not need the symbol.</p>

<p>In general, you should not include information from other attribute fields in the description. However, if it makes logical sense to include it or helps further convey a benefit, you may incorporate it (such as operating temperature, construction material, and so on).</p>

<p>For example, if you are discussing how a product is easy to clean, you may mention that it is dishwasher safe. But, don't just stick 'dishwasher safe' onto the end of the description. Instead, put it in the product note field.</p>

<h4>Description guidelines</h4>
<div class="message is-success">
  <div class="message-body">
    <strong>Do:</strong>
    <ul>
      <li>Mention the brand name and product in the first sentence, unless it is an ABC Valueline product (AAA)</li>
      <li>Refer to the product as "this" rather than "the" (e.g. "This undercounter refrigerator...")</li>
      <li>Do not use special characters. Instead, write the html equivalent (i.e. <code>&amp;trade;</code> for &trade;)</li>
      <li>Use two break tags between paragraphs (<code>&lt;br /&gt;&lt;br /&gt;</code>)</li>
      <li>Make sure your reference to the product is consistently singular/plural</li>
      <li>Avoid starting consecutive sentences with the same word</li>
      <li>Use synonyms to catch more keywords</li>
      <li>Use complete sentences</li>
      <li>Use the Oxford comma</li>
    </ul>
  </div>
</div>

<div class="message is-danger">
  <div class="message-body">
    <strong>Don't:</strong>
    <ul>
      <li>Use a SKU in the description. If you must reference another product, use the title or brand + MPN combo</li>
      <li>Use words like "our," "patent pending," "new," or anything time-related that will become outdated</li>
      <li>Capitalize the name of the product (unless it's a proper noun)</li>
      <li>Use the phrase "comes with." Instead, say "includes."</li>
      <li>Use words like "indestructible" or "unbreakable"</li>
    </ul>
  </div>
</div>

<h4>Measurements in descriptions</h4>
<p>Always write out units of measure in the product description (e.g. inches, watts, quarts). Use numbers when referring to a unit of measure (e.g. 6-inch casters). For all other numbers: write out one through nine, use numbers for 10 and above (four casters, 10 shelf positions).</p>

<blockquote>
  <em>Example</em><br>
  Enhance the presentation of your side salads and desserts with this 8-inch glass dessert plate from Libbey.
</blockquote>

<h3>Product Dimensions and Weight</h3>
<p>Field: <code>product_dimensions</code><br>
Field: <code>weight</code><br>
Purpose: Display dimensions of product</p>

<p>Product dimensions refers to the fully assembled product without any packaging. For cases of glassware, record the measurements of a single glass. For cases of plates, record the dimensions of a single plate. For a folding table, record its dimensions as it would be when set up (as opposed to folded up). You get the idea.</p>

<p>You should get product dimensions from the manufacturer or by measuring yourself. In a pinch, you can ask a store associate to measure it or reach out to a buyer to have them contact a rep that can help.</p>

<p>Record dimensions using abbreviations for length, width, and height (or width, depth, and height if appropriate). Use the abbreviations for units of measurement as in product titles. When choosing between fractions or decimals, try to match how the manufacturer lists it. If not available, choose whichever will be easiest to read.</p>

<p>For rolls of paper, listing the unrolled length and width is acceptable&mdash;you don't need to list its "height" or thickness. For other cylindrical objects, record the diameter instead of the length and width.</p>

<blockquote>
  <em>Examples</em><br>
  7" l. x 4" w. x 10" h.<br>
  3-1/4" w. x 8-1/2" d. x 14" h.<br>
  4.25" l. x 7" h. x 11.5" h.<br>
  1000' l. x 12" w.<br>
  12-1/2" dia. x 10-3/4" h.
</blockquote>

<p>For many product types, giving the overall measurements is sufficient (allowing potential customers to calculate the amount of rectangular space that the item will take up). However, we also aim to provide more specific measurements when appropriate, in addition to the overall measurement. These additional measurements are separated by a break tag (<code>&lt;br /&gt;</code>).</p>

<h4>Knives</h4>
<p>For knives, include the blade and handle dimensions in addition to the overall.</p>

<blockquote>
  <em>Example</em><br>
  Overall: 12" l. x 4" w. x 1" h.&lt;br /&gt;Handle: 5" l. x 1" w. x 1" h.&lt;br /&gt;Blade: 7" l. x 4" w. x 1/4" h.
</blockquote>

<h4>Glassware</h4>
<p>For glassware with multiple diameters (due to taper or being bulbous in the middle), list each diameter: bot. dia, top dia., and (if applicable) max. dia.</p>

<blockquote>
  <em>Examples</em><br>
  4" top dia. x 2" bot. dia. x 6" h.<br>
  3-1/2" top dia. x 2-1/2" bot. dia. x 3-1/2" max. dia. x 5-1/4" h.
</blockquote>

<h4>Chairs</h4>
<p>For stools and chairs, it is helpful to include the seat dimensions as well as the seat height (distance from the floor to the seat's top) and back height (distance from the top of the seat to the top of the back rest).</p>

<blockquote>
  <em>Example</em><br>
  Overall: 17" d. x 18" w. x 48" h.&lt;br /&gt;Seat: 14" d. x 18" w. x 30" seat h. x 18" back h.
</blockquote>

<h4>Exterior and interior</h4>
<p>For some products, it is useful to provide both exterior and interior dimensions (such as insulated boxes with an internal cavity much smaller than the cubic space they take up). List exterior dimensions first, as this will relace the overall dimensions.</p>

<p>Alternatively, you can use the overall dimensions for the exterior and use a more specific term for the interior. Use your best judgement on what will communicate most clearly.</p>

<blockquote>
  <em>Example: Exterior/Interior</em><br>
  Exterior: 25.4" l. x 17.3" w. x 18.7" h.&lt;br /&gt;Interior: 21.1" l. x 12.9" w. x 14.6" h.<br>
  <br>
  <em>Example: Overall/Oven Cavity</em><br>
  Overall: 22-1/2" w. x 26-3/4" w. x 12-1/2" h.&lt;br /&gt;Oven Cavity: 14-3/4" w. x 14-1/4" d. x 7-1/2" h.
</blockquote>

<h3>Shipping dimensions</h3>
<p>Field: <code>shipping_length</code><br>
Field: <code>shipping_width</code><br>
Field: <code>shipping_height</code><br>
Purpose: Provide shipping dimensions for proper shipping cost calculations</p>

<p>These fields refer to the dimensions of the product when it is packed for shipping. Dimensions <strong>must</strong> be recorded in inches. Only use numbers&mdash;do not include a double quote character.</p>

<blockquote>
  <em>Example</em>
  <table class="table">
    <thead>
      <tr>
        <th>shipping_length</th>
        <th>shipping_width</th>
        <th>shipping_height</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>11</td>
        <td>16</td>
        <td>12</td>
      </tr>
    </tbody>
  </table>
</blockquote>

<h3>Warranties</h3>
<p>Field: <code>warranty</code><br>
Purpose: Communicate warranty info to shopper</p>

<p>Warranties should begin with their duration. Use numbers for the time period rather than spelling it out, since space is limited. For warranties that cover different aspects for differing amounts of time or that have additional clarifications, separate each with a break tag (<code>&lt;br /&gt;</code>).</p>

<p>Use sentence case, except for when specifying a component. Use title case for it, followed by a colon; use sentence case for the remaining details. (e.g. "Blade Assembly and Container: 1 year warranty").</p>

<p>Space is an issue, so complete sentences are not required. Stick to the bare essentials of information, but don't go full caveman.</p>

<Blockquote>
  <em>Examples</em><br>
  1 year<br>
  1 year parts and labor<br>
  1 year limited edge chip warranty.<br>
  2 years limited parts, 1 year limited labor<br>
  1 year parts and labor&lt;br /&gt;Lifetime parts warranty on heating elements and drawer rollers after first year<br>
  Motor: 3 year components, 1 year labor&lt;br /&gt;Blade Assembly and Container: 1 year warranty
</Blockquote>

<h3>Keywords</h3>
<p>Field: <code>keywords</code><br>
Purpose: Fuel on-site search</p>

<p>The keywords field helps site search engines deliver products to users searching for them. The keys to using this field correctly is to:</p>

<ol>
  <li>Include synonyms for the product</li>
  <li>Anticipate how users will search for the product</li>
</ol>

<p>Use commas in this field to help break keywords out into key phrases.</p>

<blockquote>
  <em>Good</em><br>
  collins glass, glass with heavy base, heavy base drinking glass<br>
  <em>Bad</em><br>
  collins glass heavy base drinkware drinking beverage
</blockquote>

<p>By breaking keywords out into phrases, you provide better data for our on-site search engine to match against user queries.</p>

<h3>SKU, MPN, and virtual items</h3>
<p>Field: <code>sku</code><br>
Field: <code>mpn</code><br>
Purpose: Provide product identifiers for shoppers and our systems</p>

<p>The SKU is a unique code that the Company uses to identify the product. Usually, the SKU is a vendor prefix that the Company has assigned plus the product's MPN (which is designated by the manufacturer). For example, the SKU for Gold Medal's 6 oz. popcorn kit has "GMP" (a prefix designated for Gold Medal products) plus the MPN of 2836-PC to create GMP2836-PC.</p>

<p>The SKU is already defined in Elite and should never be changed. If an item is changed by the manufacturer, the old SKU is disabled and a new SKU is created. The same goes with the MPN. When this process is not followed, chaos ensues.</p>

<h3>URL key</h3>
<p>Field: <code>url_key</code><br>
Purpose: Provide path to product, fuel SEO</p>

<p>URL keys should have the following format:<br>
<code>parent-category</code>/<code>sub-category</code>/<code>child-category</code>/<code>brand</code>-<code>mpn</code>-<code>product-title</code>/<code>SKU</code></p>

<p>Each part of the URL should be lowercase, except for the SKU (which should be uppercase). The URL also needs to have all special characters and whitespace removed. Replace removed characters with a hyphen (except for slashes, which are replaced with an underscore).</p>

<p>The only slashes in the URL should be the ones after each category and before the SKU.</p>

<blockquote>
  <em>Examples</em><br>
  concessions/popcorn/popcorn-supplies/gold-medal-2836-pc-6-oz-ready-to-use-popcorn-kit/GMP2836-PC<br>
  <br>
  equipment/cooking/ovens/vulcan-vc4gd-single-deck-ng-convection-oven/VULVC4GD
</blockquote>

<h3>Meta title and meta description</h3>
<p>Field: <code>meta_title</code><br>
Field: <code>meta_description</code><br>
Purpose: Move people from search pages to our website</p>
<h4>Meta title</h4>
<p>The meta title and meta description are what shows up on a search results page (e.g. the page you see after making a search on Google). Usually. Google will sometimes ignore the meta description if it thinks that there is a more relevant snippet to show to the user.</p>

<p>The meta title should be constructed as follows:<br>
<code>Brand</code> <code>MPN</code> <code>Title</code></p>

<blockquote>
  <em>Example</em><br>
  Libbey 126 11 oz. Collins Glass w/ Heavy Base
</blockquote>
<h4>Meta description</h4>
<p>The meta description is your chance to help entice a user on the search results page to come check out the product page. It should include the meta title near the beginning.</p>

<blockquote>
  <em>Example</em><br>
  Serve thirst-quenching drinks to your guests with this <strong>Libbey 126 11 oz. Collins Glass w/ Heavy Base</strong>, a fantastic all-purpose drinking glass for any venue.<br><sub><small><em>(Emphasis added to meta title)</em></small><sub>
</blockquote>

<h3>Holding Capacity</h3>
<p>Field: <code>capacity</code><br>
Purpose: List the holding capacity of a product.</p>
<p>Use a number followed by the abbreviated unit of measurement. For some types of products, it may make sense to use an object rather than a unit of measurement (e.g. "pans" for a pan rack).</p>

<blockquote>
  <em>Example</em><br>
  5 qt.<br>
  10 cu. ft.<br>
  36 buns<br>
  50 cups<br>
  4 full-size pans
</blockquote>

<h3>Electrical information</h3>
<p>Field: <code>electrical</code><br>
Purpose: Help customers identify the electrical requirements of the product</p>

<p>This field, when applicable, lists the voltage, hertz, and phase of the product. It should be styled as follows:<br>
<code>volts</code>/<code>hertz</code>/<code>phase</code></p>

<p>If a range is given for the voltage, use a hyphen to denote the range. If the product is convertible, use a break tag (<code>&lt;br /&gt;</code>) to include that information on a new line.</p>

<p>If only one piece of information is given (usually the voltage), write it out.</p>

<blockquote>
  <em>Examples</em><br>
  120/60/1<br>
  208-240/60/1<br>
  240/60/3&lt;br /&gt;Field convertible to single phase<br>
  120 volts
</blockquote>

<h3>Connection</h3>
<p>Field: <code>connection</code><br>
Purpose: Display required energy connection</p>

<p>Usually, this will be a NEMA plug type for electronic devices or something like '3/4" NPT' for gas devices. However, some devices may have more unique requirements. Do your best to follow the patterns shown in the example.</p>

<p>You should be able to find this information on the product's specsheet. Don't guess on this kind of thing&mdash;it will only cause problems.</p>

<blockquote>
  <em>Examples</em><br>
  NEMA 5-20P<br>
  3/4" NPT<br>
  Hard-wired on site. Uses 4 wire system.
</blockquote>

<h3>Energy consumption</h3>
<p>Field: <code>energy_consume</code><br>
Purpose: Display energy requirements for the product</p>

<p>This field is more-or-less limited to electronic devices (although you will see some other entries of questionable validity in the database). List how many amps the device will draw during operation.</p>

<blockquote>
  <em>Examples</em><br>
  6.6 amps<br>
  7 amps<br>
  15 amps
</blockquote>

<h3>Operating temperature</h3>
<p>Field: <code>prod_temp</code><br>
Purpose: Display heat/cold tolerance of the product</p>

<p>When given a maximum heat tolerance, phrase this information as "Up to X&deg;F" rather than just listing the temperature alone. You can be more specific, if it helps clarify other claims (see example). When given a range, link the low temperature and max temperature with the word "to" (again, see example).</p>

<blockquote>
  <em>Examples</em><br>
  70&amp;deg;F to 375&amp;deg;F<br>
  Up to 160&amp;deg;F<br>
  -40&amp;deg;F to 375&amp;deg;F<br>
  Oven safe up to 325&amp;deg;F only
</blockquote>

<h3>Power output</h3>
<p>Field: <code>output</code><br>
Purpose: List the power output of the product</p>

<p>The unit of measurement listed in this field will vary depending on what kind of product is producing the power. Most likely, it will be recorded in watts, horsepower (HP), or BTUs. When it makes sense, list output separately by aspect of the product.</p>

<blockquote>
  <em>Examples</em><br>
  1/3 HP<br>
  1,700 watts<br>
  370,000 BTUs<br>
  Burners: 30,000 BTUs&lt;br /&gt;Oven: 32,000 BTUs
</blockquote>

<h3>Gas type</h3>
<p>Field: <code>gas_type</code><br>
Purpose: List the gas types that are compatible with the product</p>

<p>Generally, this field will just be "Natural Gas," "Liquid Propane," or "Butane." However, you can use a break tag (<code>&lt;br /&gt;</code>) to indicate if the product if field convertible on a new line.</p>

<blockquote>
  <em>Examples</em><br>
  Natural Gas<br>
  Liquid Propane<br>
  Butane<br>
  Natural Gas&lt;br /&gt;Field Convertible to Liquid Propane
</blockquote>

<h3>Sustainability</h3>
<p>Field: <code>sustainability</code><br>
Purpose: List the environmentally-friendly features of the product</p>

<p>This field is used to list any features of the product that make it sustainable or environmentally friendly.</p>

<blockquote>
  <em>Examples</em><br>
  Energy Star&amp;reg;<br>
  100% recyclable<br>
  100% recycled material<br>
  BPA Free
</blockquote>`;

var writingForSocialMedia = `<p>We use social media to build relationships with the Company's customers and share details about our events and milestones. But it also creates opportunities to say the wrong thing, put off customers, and damage our brand. So we're careful and deliberate in what we post to our social channels. This section lays out how we strike that delicate balance.</p>

<h3>Basics</h3>

<p>The Company has a presence on most major social media platforms. These channels are all managed by the marketing team. Here are our accounts and what we usually post on each:</p>

<ul>
  <li><a href="">Facebook</a>: Company news, events, "we're hiring" posts, industry news, shared content, promos, ads</li>
  <li><a href="">Twitter</a>: Company news, events, "we're hiring" posts, shared content, promos</li>
  <li><a href="">LinkedIn</a>: Company news, "we're hiring" posts, industry news, store openings</li>
  <li><a href="">Instagram</a>: Company news, events, store openings, promos, ads</li>
</ul>

<h3>Guidelines</h3>

<p>Our writing for social media should generally follow the style points outlined in the <a onclick="app.switchTopic(4)">Voice and Tone</a> and <a onclick="app.switchTopic(5)">Grammar and mechanics</a> sections. Here are some additional pointers, too.</p>

<h4>Write short, but smart</h4>

<p>Some social media platforms have a character limit; others don't. But for the most part, we keep our social media copy short.</p>

<ul>
  <li><strong>Twitter:</strong> 280 is the max, but we aim for 200 characters or less (this leaves room for a manual retweet and comments)</li>
  <li><strong>Facebook:</strong> No limit, but aim for 1-2 short sentences.</li>
</ul>

<p>To write short, simplify your ideas or reduce the amount of information you're sharing, but not by altering the spelling or punctuation of the words themselves. It's fine to use the shorter version of some words, like "info" for "information." But do not use numbers and letters in place of words, like "4" instead of "for" or "u" instead of "you."</p>

<h4>Engagement</h4>

<p>Do your best to adhere to the Company's style guidelines when you're using our social media channels to correspond with users. Use correct grammar and punctuation, and avoid excessive exclamation points.</p>

<p>When appropriate, you can tag the subject of your post on Twitter or Facebook. But avoid directly tweeting at or otherwise publicly tagging a post subject with messages like, "Hey, we wrote about you!" Never ask for retweets, likes, or favorites.</p>

<blockquote>
  <strong>Yes:</strong><br>
  "We talked with @bucees about their new store! [Link to Post]"<br>
  <strong>No:</strong><br>
  "Hey @bucees, can you RT this post we wrote about you? [Link to Post]"
</blockquote>

<h4>Hashtags</h4>

<p>We employ hashtags from time to time. We may use them to promote an event or connect with users at a conference. Be wary of using current event or trending hashtags to promote the Company.</p>

<h4>Trending topics</h4>

<p>Do not use social media to comment on trending topics or current events that are unrelated to the Company or its industry. Be aware of what's going on in the news when you're publishing social content for the Company.</p>`;

var writingBlogArticles = `<p>The Company's blog generally publishes:</p>

<ul>
  <li>Examples of how to use products sold by the Company</li>
  <li>Buying guides</li>
  <li>Tips and tricks for our customers</li>
  <li>Case studies featuring notable customers</li>
  <li>Website feature, release, and update announcements</li>
</ul>

<p>We publish blog posts that lead readers to answers for questions they might not have asked yet. We want to show people that we're an industry leader with the best products, and we use our blog to tell the stories behind those products.</p>

<h3>Guidelines</h3>

<p>When writing for the blog, follow the style points outlined in the <a onclick="app.switchTopic(4)">Voice and Tone</a> and <a onclick="app.switchTopic(5)">Grammar and Mechanics</a> sections. Here are some more general pointers, too.</p>

<h4>Be casual, but smart</h4>
<p>This isn't a term paper, so there's no need to be stuffy. Drop some knowledge while casually engaging your readers with conversational language.</p>

<h4>Be specific</h4>
<p>If you're writing about data, put the numbers in context. If you're writing about a notable customer, give the reader plenty of information about the company's stage, workflow, results, and values.</p>

<h4>Get to the point</h4>
<p>Get to the important stuff right away, and don't bury the kicker. Blog posts should be scannable and easy to digest. Break up your paragraphs into short chunks of three or four sentences, and use subheadings. Our users are busy, and we should always keep that in mind.</p>

<h4>Link it up</h4>
<p>Feel free to link away from the blog if it helps you explain something.</p>

<h4>Use tags and keywords</h4>
<p>Add keywords that apply to your article as tags. Look through existing posts for common tags. If you're not sure if a word should be a tag, it probably shouldn't.</p>

<h4>Use pictures</h4>
<p>Include images in your blog posts when it makes sense. If you're explaining how to use a product, include images to illustrate your point. Make sure to use alt text.</p>`;

// var writingTechnicalContent = ``;
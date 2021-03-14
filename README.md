# Penmic podcasts

The fictitious company Penmic Podcasts, is a provider of podcast services. They offer easy access and support to private individuals, as well as companies that need a host/hub for their podcasts.

## UX

### User stories

#### Penmic

The landing page text content displays the service that Penmic offers its clients, the benefits to the client by the simplicity of using the company's service. The offered services are visually enforced by the Hero image on the landing page and clearly stated in the large heading.<br>
The short informative paragraph, beneath the header, further state the simplicity in the company's services that "...by one-click" to gain full access and reach a world of listeners. This is further demonstrated by the single email registration button with its strong color.<br>
To gain confidence and reliability in Penmic's services, a sample of the collaborating podcast distributors is stated beneath the 'request access' button.

##### _Persona Gail Wingers_

I am a small business owner and run a florist shop in a middle size town. I want to expand my business and reach the younger public that soon will be house owners with their own garden. By publishing a podcast on how to take care of a garden, plants, and grow vegetables my florist shop will maybe be their first choice for supplies.<br>
As a small business owner, my time is precious and I am looking for an easy solution to fast and easily get started with a podcast. I want reassurance that my money is well spent and that I can reach as many listeners as possible for little effort.

## Features

- Hero image to convey type of services
- Heading with descriptive paragraph to declare purpose, benefits and quality of services.
- Registration input field and a call-to-action button. Allow a person to easy access by simply register their email address.
- Icons of partners and distributors to show the wide range of distribution.

## Technologies used

- HTML5
- CSS3
- Sass
- Javascript
- Git
- Normalize.css
- Grammarly spellchecking

## Testing

#### Manual testing

Button clearly show expected hover effect on mouse over. Email input field takes input as expected and when entering faulty values a text explain that a faulty value have been entered. When correct vallue is entered the data is submitted as expected.

#### Other testing

_Lighthouse_

Test result can differ depending of connectivity and bandwidth

- Performance 100 (FCP 1.4s, LCP 1.4s, TtI 1.4s)
- Accessability 86 (Aria in form could be improved, contrast ratio as well as keyboard navigation)
- Best Practises 100
- SEO 92

_JsHint_
One warning - Use the function form of "use strict".

_W3C_ _HTML_ _Validator_
Errors for duplicate id in forms only. Since the form is the exact same but (only varies in styling and location) in two different media queries the id's cause no error in console or negative effect in the validation.

## Deployment

## Credits

Chris Bongers on Dev.to for insights in common practise for email validation with Javascript.

### Design

The design is based on a design specification for the Frontend Mentor challenge. The objective is to be as accurate as possible in layout and design.<br>

#### _Mobile_

On access button in mobile view the text was according to wireframe in font-weight 'normal' (400), but I changed it to fontweight bold (700) which seemed more in line with the visual display of the text.

### Content

The content is provided by Frontend Mentor for the purpose of the challenge.

### Media

All media as images and svg's is provided by Frontend Mentor for the purpose of the challenge. The background images were exchanged by myself into WebP format insted of jpg to reduce file size. WebP have as of March 2021, 93% of global support according to 'Can I Use' web page.

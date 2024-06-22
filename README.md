# Pokemon Wiki Project (Published 6/22/2024)
By Anton Clayton

This is my very first personal React Project! It features a pokemon wiki with a basic home page which connects to the pokemon "search" page. 
The user can search for any pokemon that is available on PokeAPI (https://pokeapi.co/) and receive the sprite, basic info, stats, and evolution display of the pokemon.

# What I used:
- React
  - react-router-dom to navigate between pages
  - useState hook
  - useEffect hook
- JSX
- CSS Styling
- API Integration

# Features:
- Seamless connection between the home page and search page through react-router-dom Routes
- Search bar which provides search suggestions/auto-complete based on the user input which is helpful for spelling difficulties or difficulties in remembering pokemon names
- Sprite display slideshow which has arrows to cycle through the shiny variants of each pokemon as well as the female variant (if it exists)
- Basic info which contains the pokemon's ID number, typing, abilities, and hidden abilities
- Pokemon stats which displays each pokemon's six core stats with dynamic color mapping and display size proportional to stat value to express stats in a easily digestable way (Ex. small red bar means low stat and larger green bar means high stat)
- Evolution display which shows each pokemon's evolutionary path if applicable including split paths / special evolutions

# Improvements:
- Greater support for search suggestions such as being able to select/hover suggestions with arrow keys without needing mouse input
- Evolution display does not display the conditions (level-up/item) needed for evolution from one pokemon to the next
  - Because of the nature of the API and different branching evolution cases, I have decided to leave this feature for the future
- Decided to bail on the pokemon "Moves" component because of the complexities surrounding the changes made to pokemon moves throughout the many different pokemon generations
  - In the future, I would like to implement the Moves feature to fully "complete" this project.
- Inconsistent loading times for components and staggered display of these components
- Overhaul of styling in general
  - (My CSS capabilities are quite amateurish and I need to further improve my styling skills)
 
# Reflection:
- Code cleanliness is extremely important because at times during the project, I would have to reread my code multiple times to refresh the logic in my mind.
- Extensive code comments are mandatory and should be done all throughout code-writing to ensure I can quickly re-understand my code when I have not touched it in a while
- Use a meaningful naming convention for variables and styling overall to prevent naming conflicts
- Plan the project and how it should look beforehand (components, API data, styling, etc) so that I don't run into roadblocks later.

# My Next Plans:
Overall, I am extremely happy with how my Pokemon Wiki project turned out! 
Through this project, I have learned extensively about fetching and manipulating data from APIs and I have been able to recognize my current gaps of programming knowledge.

My next goal is to transition to typescript and develop my CSS abilities further so that my next project is far more polished and aesthetic. I would like progress to full-stack web development and being proficient in Python in the future.

Thank you to BroCode on Youtube for teaching me the foundations needed to complete this project :)




/* eslint-disable  func-names */
/* eslint quote-props: ["error", "consistent"]*/

'use strict';

const Alexa = require('alexa-sdk');

const APP_ID = 'amzn1.ask.skill.b9f890e9-5ca1-40ed-afbf-906cc70b25c0';

const quotes = [
    "When I get sad, I stop being sad and be awesome instead.",
    "A lie is just a great story that someone ruined with the truth.",
    "It's going to be legen...wait for it...and I hope you're not lactose-intolerant cause the second half of that word is...dairy!",
    "Suit up!",
    "Believe it or not, I was not always as awesome as I am today",
    "Think of me like Yoda, but instead of being little and green I wear suits and I’m awesome. I’m your bro—I’m Broda!",
    "In my body, where the shame gland should be, there is a second awesome gland. True story.",
    "God, it’s me, Barney. What up? I know we don’t talk much, but I know a lot of girls call out your name because of me.",
    "Do you have some puritanical hang up on prostitution? Dude, it’s the world’s oldest profession.",
    "Suits are full of joy. They’re the sartorial equivalent of a baby’s smile.",
    "The only reason to wait a month for a sex is if she is 17 years, 11 months old.",
    "Ted, if you have a crazy story, I was there. It is just a law of the universe.",
    "The cougar displays maximum cleavage possible to captivate her prey. You are watching them bounce she is about to pounce.",
    "Every Halloween I bring a spare costume, in case I strike out with the hottest girl at the party. Thay way, I have a second chance to make a first impression.",
    "You know who is confused? Bimbos. They are easily confused. It's one of the thousand little things I love about them. I love their vacant, trusting stares;their sluggish unencumbered minds; their unresolved daddy issues",
    "Your ego's writing checks your body can't cash.",
    "Airport bar! Flight attendants, they will get your table in its upright position. Say what?",
    "So many great things about this girl. Her boobs, her rack, her chest.",
    "The bro code has been around for centuries. Nay, whatever is more than a century.",
    "I need you to proxy bang this girl for me. Be my stand in and put your gland in.",
    "I have nothing, but the utmost respect for you skanks.",
    "With great penis comes great responsibility",
    "I'll say this, there is no quit in that guy. You should fire him",
    "There are only two reasons to date a girl: You have already dated, breast implants.",
    "When will you learn that the only difference between my life and porno is my life has better lighting.",
    "When out with guys, never accept a call from your girlfriend unless she is dying or trapped under a burning fuel truck, and if that is the case, make it quick",
    "You guys know how it is hard to be friends with me, because I am so awesome.",
    "I'm sorry, I can't hear you over the sound of how awesome I am.",
    "The time to be awesome is now.",
    "Whatever you do in this life it is not legendary unless your friends are there to see it.",
    "Swag is for boys, class is for men",
    "It is physically impossible for me to take a bad picture - I don't know why, just ask God.",
    "Challenge accepted!",
    "You are the love of my life, Everything I have and everything I am is yours. Forever.",
    "Settling down is for losers and kids who never go out anymore.",
    "You take a man's wife before you take his accidental curly.",
    "There is always a strip club.",
    "Suit like that only needs one button, self-destruct.",
    "There is no girl so pretty. For I am Barney Stinson, Player King of New York City.",
    "Crazy girls are crazy, because they are crazy",
    "Go ahead laugh. Laugh like all the others, but those magicians pulled of the greatest trick of all. They accepted me.",
    "Wingmanship is a two way street.",
    "There are only a few truly great people on this planet and he is one of them.",
    "Come with me if you want to bang",
    "It is 2012! What do you expect, to meet some cute travel agent while you are reading a newspaper at a book store?",
    "I'm KFC, you don't mess with the Colonel's original recipe!",
    "I wish men could have children on their own, like seahorses!",
    "New is always better.",
    "I'm Barney Stinson, I don't get smitten, I smite!",
    "Golden Rule. I do not buy dinner to get the Yes. Dinner is a very intimate activity. It requires a level of connection and eye contact that sex just doesn't.",
    "Barney Stinson allllllllways gets the yes.",
    "Ah Valentines, the second base of third grade.",
    "People want the lie. They need the lie!",
    "So now, phrama girls are the hottest profession.",
    "Suits and insecure woman. I hate them I really just hate them.",
    "Only two things could cause that commotion - boobs.",
    "You know what they say about relationships. Every waking moment's a battle.",
    "There are so many great things to do with human mouth, why waste it on talking?",
    "Canada's not so bad. If they play their cards right, they may even become a state one day.",
    "Laser tag knows no age restrictions, much like stripping in the Midwest.",
    "Christmas is a time when people are lonely and desperate, it's the most wonderful time of the year.",
    "Lebanese girls are the new half-Asians.",
    "Here's the mini-cherry on top of the regular cherry on top of the sundae of awesomenes that is my life."
];

const resources = {
    'en-GB': {
        translation: {
            QUOTES: quotes,
            SKILL_NAME: 'Barney Quotes',
            GET_QUOTE_MESSAGE: "Here's your Barney quote: ",
            HELP_MESSAGE: 'You can say tell me a barney quote, or, you can say exit... What can I help you with?',
            HELP_REPROMPT: 'What can I help you with?',
            STOP_MESSAGE: 'Goodbye!',
        },
    },
    'en-US': {
        translation: {
            QUOTES: quotes,
            SKILL_NAME: 'Barney Quotes',
            GET_QUOTE_MESSAGE: "Here's your Barney quote: ",
            HELP_MESSAGE: 'You can say tell me a barney quote, or, you can say exit... What can I help you with?',
            HELP_REPROMPT: 'What can I help you with?',
            STOP_MESSAGE: 'Goodbye!',
        },
    },
};

const handlers = {
    'LaunchRequest': function () {
        this.emit('GetQuote');
    },
    'GetNewQuoteIntent': function () {
        this.emit('GetQuote');
    },
    'GetQuote': function () {
        const quotes = this.t('QUOTES');
        const quoteIndex = Math.floor(Math.random() * quotes.length);
        const randomQuote = quotes[quoteIndex];

        // Create speech output
        const speechOutput = this.t('GET_QUOTE_MESSAGE') + randomQuote;
        this.emit(':tellWithCard', speechOutput, this.t('SKILL_NAME'), randomQuote);
    },
    'AMAZON.HelpIntent': function () {
        const speechOutput = this.t('HELP_MESSAGE');
        const reprompt = this.t('HELP_MESSAGE');
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', this.t('STOP_MESSAGE'));
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', this.t('STOP_MESSAGE'));
    },
    'SessionEndedRequest': function () {
        this.emit(':tell', this.t('STOP_MESSAGE'));
    },
};

exports.handler = (event, context) => {
    const alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    // To enable string internationalization (i18n) features, set a resources object.
    alexa.resources = resources;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

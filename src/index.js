/* eslint-disable  func-names */
/* eslint quote-props: ["error", "consistent"]*/

'use strict';

const Alexa = require('alexa-sdk');

const APP_ID = undefined;

const quotes = require('./quotes');
const brocode = require('./brocode');

const resources = {
    'en-GB': {
        translation: {
            QUOTES: quotes,
            SKILL_NAME: 'Barney Stinson Quotes',
            GET_QUOTE_MESSAGE: "Here's your quote: ",
            HELP_MESSAGE: 'You can say tell me a barney quote, or, you can say exit... What can I help you with?',
            HELP_REPROMPT: 'What can I help you with?',
            STOP_MESSAGE: 'Goodbye!',
        },
    },
    'en-US': {
        translation: {
            QUOTES: quotes,
            SKILL_NAME: 'Barney Stinson Quotes',
            GET_QUOTE_MESSAGE: "Here's your quote: ",
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

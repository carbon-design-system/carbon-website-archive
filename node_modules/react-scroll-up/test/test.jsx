// JSDom is used to allow the tests to run right from the command line (no browsers needed)
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const dom = new JSDOM(`<!DOCTYPE html><html><body></body></html>`);

global.window = dom.window;
global.document = dom.window.document;

// Also apply a requestAnimationFrame polyfill
require('raf').polyfill();


import React from 'react';
import { after, before, beforeEach, describe, it } from "mocha";
import sinon from 'sinon';

import { expect } from 'chai';
import { shallow } from 'enzyme'; // https://github.com/airbnb/enzyme/issues/465 shallow vs mount vs render
import chai from 'chai'; // https://github.com/producthunt/chai-enzyme#setup
import chaiEnzyme from 'chai-enzyme';

chai.use(chaiEnzyme()); // Note the invocation at the end

import TestUtils from 'react-dom/test-utils';
import ScrollUp from '../scrollUp';



// describe makes a test group
describe('<ScrollUp/> states', function () {
    // This will be run before each test to reset the scroll position
    beforeEach(() => {
        window.pageYOffset = 0;
    });

    // and each `it` function describes an individual test
    it('is hidden when first rendered', function () {
        let renderedComponent = TestUtils.renderIntoDocument(
            <ScrollUp showUnder={100}>
                <span>UP</span>
            </ScrollUp>
        );

        expect(renderedComponent.state.show).to.be.false;
    });

    it('is shown if the page is scrolled past the `showUnder` point', function () {
        let renderedComponent = TestUtils.renderIntoDocument(
            <ScrollUp showUnder={100}>
                <span>UP</span>
            </ScrollUp>
        );

        // Set the scroll position to 200 and trigger the event manually
        window.pageYOffset = 200;
        renderedComponent.handleScroll();

        expect(renderedComponent.state.show).to.be.true;
    });

});


// describe makes a test group
describe('<ScrollUp/> move 1', function () {

    let scrollToSpy;
    let renderedComponent;

    before(() => {
        window.pageYOffset = 0;

        renderedComponent = TestUtils.renderIntoDocument(
            <ScrollUp showUnder={100}>
                <span>UP</span>
            </ScrollUp>
        );

        // "stub" the window.scrollTo function (because we want to see how it's called)
        scrollToSpy = sinon.stub(global.window, 'scrollTo').callsFake( (x, y) => {
            window.pageXOffset = x;
            window.pageYOffset = y;
            renderedComponent.handleScroll(); // And make sure to trigger the handleScroll for each call
        });

    });

    after(() => {
        scrollToSpy.restore();
    });

    it('scrolls back up to the top when clicked', function (done) {

        // Ensure topPosition is set correctly
        expect(renderedComponent.props.topPosition).to.equal(0);

        // Set the scroll position to 200 and trigger the event manually
        window.pageYOffset = 200;
        renderedComponent.handleScroll();

        // Now activate the click function
        renderedComponent.handleClick();

        // Give it a bit to scroll back up
        setTimeout(() => {
            expect(scrollToSpy.lastCall.args[1]).to.within(-0.1, 0.1);
            expect(renderedComponent.state.show).to.be.false;
            done();
        }, 500);
    });

});


// describe makes a test group
describe('<ScrollUp/> move 2', function () {

    let scrollToSpy;
    let renderedComponent;

    before(() => {
        window.pageYOffset = 0;

        renderedComponent = TestUtils.renderIntoDocument(
            <ScrollUp showUnder={100} topPosition={100}>
                <span>UP</span>
            </ScrollUp>
        );

        // "stub" the window.scrollTo function (because we want to see how it's called)
        scrollToSpy = sinon.stub(global.window, 'scrollTo').callsFake( (x, y) => {
            window.pageXOffset = x;
            window.pageYOffset = y;
            renderedComponent.handleScroll(); // And make sure to trigger the handleScroll for each call
        });
    });

    after(() => {
        scrollToSpy.restore();
    });

    it('scrolls to `topPosition` when clicked', (done) => {
        // Ensure topPosition is set correctly
        expect(renderedComponent.props.topPosition).to.equal(100);

        // Set the scroll position to 200 and trigger the event manually
        window.pageYOffset = 200;
        renderedComponent.handleScroll();

        // Now activate the click function
        renderedComponent.handleClick();

        // Give it a bit to scroll back up
        setTimeout(() => {
            expect(scrollToSpy.lastCall.args[1]).to.be.within(95, 105);
            expect(renderedComponent.state.show).to.be.false;
            done();
        }, 500);
    });

});



// describe makes a test group
describe('<ScrollUp/> Styles', function () {

    it('check rendered styles - default values - hidden', () => {
        const wrapper = shallow(
            <ScrollUp showUnder={100}>
                <span>UP</span>
            </ScrollUp>
        );
        wrapper.setState({show: false});

        // default styles
        expect(wrapper).to.have.style("position", 'fixed');
        expect(wrapper).to.have.style("bottom", '50px');
        expect(wrapper).to.have.style("right", '30px');
        expect(wrapper).to.have.style("cursor", 'pointer');
        expect(wrapper).to.have.style("transition-duration", '0.2s');
        expect(wrapper).to.have.style("transition-timing-function", 'linear');
        expect(wrapper).to.have.style("transition-delay", '0s');
        expect(wrapper).to.have.style("opacity" , '0');
        expect(wrapper).to.have.style("visibility", 'hidden');
        expect(wrapper).to.have.style("transition-property",  'opacity, visibility');
    });


    it('check rendered styles - default values - visibile', () => {
        const wrapper = shallow(
            <ScrollUp showUnder={100}>
                <span>UP</span>
            </ScrollUp>
        );

        wrapper.setState({show: true});

        // default styles
        expect(wrapper).to.have.style("position", 'fixed');
        expect(wrapper).to.have.style("bottom", '50px');
        expect(wrapper).to.have.style("right", '30px');
        expect(wrapper).to.have.style("cursor", 'pointer');
        expect(wrapper).to.have.style("transition-duration", '0.2s');
        expect(wrapper).to.have.style("transition-timing-function", 'linear');
        expect(wrapper).to.have.style("transition-delay", '0s');
        expect(wrapper).to.have.style("opacity" , '1');
        expect(wrapper).to.have.style("visibility", 'visible');
        expect(wrapper).to.have.style("transition-property",  'opacity, visibility');
    });


    it('check rendered styles - custom values', () => {
        const wrapper = shallow(
            <ScrollUp showUnder={100}
                      style={{
                          zIndex: 3,
                          right: 20,
                          opacity: 0,
                          visibility: 'hidden',
                          transitionProperty: 'opacity'}}>
                <span>UP</span>
            </ScrollUp>
        );

        // to check override opacity
        wrapper.setState({show: true});

        // default styles
        expect(wrapper).to.have.style("position", 'fixed');
        expect(wrapper).to.have.style("bottom", '50px');
        expect(wrapper).to.have.style("cursor", 'pointer');
        expect(wrapper).to.have.style("transition-duration", '0.2s');
        expect(wrapper).to.have.style("transition-timing-function", 'linear');
        expect(wrapper).to.have.style("transition-delay", '0s');

        // overrides by props, but have to still value respective state
        expect(wrapper).to.have.style("opacity" , '1');
        expect(wrapper).to.have.style("visibility", 'visible');
        expect(wrapper).to.have.style("transition-property",  'opacity, visibility');

        // overrides default values
        expect(wrapper).to.have.style("right", '20px');

        // props styles
        expect(wrapper).to.have.style("z-index", '3');
    });

});


// describe makes a test group
describe('<ScrollUp/> children', function () {

    it('check if children is rendered ', () => {
        window.pageYOffset = 500;

        const wrapper = shallow(
            <ScrollUp showUnder={100}>
                <span>UP</span>
            </ScrollUp>
        );

        expect(wrapper.find('span')).to.have.text('UP');
    });

});



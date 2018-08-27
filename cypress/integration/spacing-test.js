const sectionSpacings = {
    small: {
        min: 30,
        max: 50
    }, 
    medium: {
        min: 40,
        max: 60
    }, 
    large: {
        min: 50,
        max: 70
    }
}

const noSpacingSelector = ':not(.section--spacing-medium, .section--spacing-large)';

context('spacing between sections', () => {
    it('check spacings for purple sections', () => {
    	cy.visit('/');
    	cy.viewport(1920, 800);

        cy.get(`.bg--purple.section${noSpacingSelector} + .bg--purple.section${noSpacingSelector}`)
            .should('have.css', 'padding-top', `0px`);

        cy.get(`.bg--purple.section${noSpacingSelector} + .bg--purple.section.section--spacing-medium`)
            .should('have.css', 'padding-top', `${sectionSpacings['medium']['max'] - sectionSpacings['small']['max']}px`);

        cy.get(`.bg--purple.section${noSpacingSelector} + .bg--purple.section.section--spacing-large`)
            .should('have.css', 'padding-top', `${sectionSpacings['large']['max'] - sectionSpacings['small']['max']}px`);

        cy.get(`.bg--purple.section.section--spacing-medium + .bg--purple.section${noSpacingSelector}`)
            .should('have.css', 'padding-top', `0px`);
            
        cy.get(`.bg--purple.section.section--spacing-medium + .bg--purple.section.section--spacing-medium`)
            .should('have.css', 'padding-top', `0px`);
            
        cy.get(`.bg--purple.section.section--spacing-medium + .bg--purple.section.section--spacing-large`)
            .should('have.css', 'padding-top', `${sectionSpacings['large']['max'] - sectionSpacings['medium']['max']}px`);

        cy.get(`.bg--purple.section.section--spacing-large + .bg--purple.section${noSpacingSelector}`)
            .should('have.css', 'padding-top', `0px`);

        cy.get(`.bg--purple.section.section--spacing-large + .bg--purple.section.section--spacing-medium`)
            .should('have.css', 'padding-top', `0px`);
            
        cy.get(`.bg--purple.section.section--spacing-large + .bg--purple.section.section--spacing-large`)
            .should('have.css', 'padding-top', `0px`);

    });

    it('check spacings for different collored sections', () => {
        cy.viewport(1920, 800);

        cy.get(`.bg--white.section:not(.section--spacing-medium, .section--spacing-large) + .bg--purple.section:not(.section--spacing-medium, .section--spacing-large)`)
            .should('have.css', 'padding-top', `${sectionSpacings['small']['max']}px`)

        cy.get(`.bg--white.section.section--spacing-medium + .bg--purple.section:not(.section--spacing-medium, .section--spacing-large)`)
            .should('have.css', 'padding-top', `${sectionSpacings['small']['max']}px`)

        cy.get(`.bg--white.section.section--spacing-large + .bg--purple.section:not(.section--spacing-medium, .section--spacing-large)`)
            .should('have.css', 'padding-top', `${sectionSpacings['small']['max']}px`)

        cy.get(`.bg--white.section.section--spacing-medium + .bg--purple.section:not(.section--spacing-medium, .section--spacing-large)`)
            .should('have.css', 'padding-top', `${sectionSpacings['small']['max']}px`)

        cy.get(`.bg--white.section.section--spacing-medium + .bg--purple.section.section--spacing-medium`)
            .should('have.css', 'padding-top', `${sectionSpacings['medium']['max']}px`)

        cy.get(`.bg--white.section.section--spacing-medium + .bg--purple.section.section--spacing-large`)
            .should('have.css', 'padding-top', `${sectionSpacings['large']['max']}px`)

        cy.get(`.bg--white.section.section--spacing-large + .bg--purple.section:not(.section--spacing-medium, .section--spacing-large)`)
            .should('have.css', 'padding-top', `${sectionSpacings['small']['max']}px`)

        cy.get(`.bg--white.section.section--spacing-large + .bg--purple.section.section--spacing-medium`)
            .should('have.css', 'padding-top', `${sectionSpacings['medium']['max']}px`)

        cy.get(`.bg--white.section.section--spacing-large + .bg--purple.section.section--spacing-large`)
            .should('have.css', 'padding-top', `${sectionSpacings['large']['max']}px`)
    });
});
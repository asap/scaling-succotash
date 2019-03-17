import React from 'react';
import FilterLink from '../containers/FilterLink';
import { VisibilityFilters } from '../actions';

const Footer = () => (
  <div className="footer container">
    <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>
      Hide Completed Tasks
    </FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>
      Show Completed Tasks
    </FilterLink>
  </div>
);

export default Footer;

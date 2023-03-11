import PropTypes from 'prop-types';
import { SectionStyle, SectionTitleStyle } from './Section.styled';

const Section = ({ title, children }) => (
  <SectionStyle>
    <SectionTitleStyle>{title}</SectionTitleStyle>
    {children}
  </SectionStyle>
);

Section.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
};

export default Section;

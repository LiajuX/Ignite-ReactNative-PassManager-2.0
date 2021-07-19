import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const HeaderTitle = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.medium};

  margin: ${RFValue(64)}px auto ${RFValue(41)}px auto;
`;

export const Form = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.shape};

  padding: 0 ${RFValue(27)}px;
  padding-top: ${RFValue(26)}px;

  border-top-left-radius: ${RFValue(50)}px;
  border-top-right-radius: ${RFValue(50)}px;
`;
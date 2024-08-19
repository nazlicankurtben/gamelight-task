import { AnimationObject } from 'lottie-react-native';

export interface OnboardingData {
  id: number;
  animation: AnimationObject | any; 
  text: string;
  textColor: string;
  backgroundColor: string;
}

const onboardingData: OnboardingData[] = [
  {
    id: 1,
    animation: require('@/assets/animations/Lottie1.json'),
    text: 'Explore a vast collection of games',
    textColor: '#005b4f', 
    backgroundColor: '#ffa3ce',
  },
  {
    id: 2,
    animation: require('@/assets/animations/Lottie2.json'),
    text: 'Add your favorites to your collection',
    textColor: '#1e2169', 
    backgroundColor: '#bae4fd',
  },
  {
    id: 3,
    animation: require('@/assets/animations/Lottie3.json'),
    text: 'Stay updated with the latest game releases',
    textColor: '#F15937',
    backgroundColor: '#faeb8a',
  },
];

export default onboardingData;

export default function checkCategory(resultBMI) {
  switch (true) {
    case (resultBMI < 15):
      return 'Very severely underweight';
    case (resultBMI < 16):
      return 'Severely underweight';
    case (resultBMI < 18.5):
      return 'Underweight';
    case (resultBMI < 25):
      return 'Normal (healthy weight)';
    case (resultBMI < 30):
      return 'Overweight';
    case (resultBMI < 35):
      return 'Obese Class I (Moderately obese)';
    case (resultBMI < 40):
      return 'Obese Class II (Severely obese)';
    default:
      return 'Obese Class III (Very severely obese)';
  }
}

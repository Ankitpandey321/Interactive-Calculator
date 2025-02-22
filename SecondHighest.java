public class SecondHighest {
    public static void main(String[] args) {
        int[] numbers = {5, 3, 8, 1, 4, 7};
        System.out.println("The second highest number is: " + findSecondHighest(numbers));
    }

    public static int findSecondHighest(int[] array) {
        if (array.length < 2) {
            throw new IllegalArgumentException("Array should have at least two elements.");
        }

        int firstHighest = Integer.MIN_VALUE;
        int secondHighest = Integer.MIN_VALUE;

        for (int num : array) {
            if (num > firstHighest) {
                secondHighest = firstHighest;
                firstHighest = num;
            } else if (num > secondHighest && num < firstHighest) {
                secondHighest = num;
            }
        }

        if (secondHighest == Integer.MIN_VALUE) {
            throw new IllegalArgumentException("There is no second highest element.");
        }

        return secondHighest;
    }
}
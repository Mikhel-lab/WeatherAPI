using System;

namespace QuestionEleven
{
    public delegate void Numbers();
    class Program
    {
        static void Main(string[] args)
        {
            Numbers number = () =>
            {
                int[] numbers = { 2, 3, 4 };
                for (int i = 0; i < numbers.Length; i++)
                {
                    double Squared = Math.Pow(numbers[i], 2);
                    Console.Write(+Squared + " ");
                }
            };
            number();           
        }
    }
}

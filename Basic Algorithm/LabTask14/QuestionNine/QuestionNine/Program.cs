using System;

namespace QuestionNine
{
    public delegate void Numbers();

    class Program
    {
        static void Main(string[] args)
        {
            Numbers num = () =>
            {
                int[] numbers = { 34, 56, 78, 54 };
                for (int i = 0; i < numbers.Length; i++)
                {
                    Console.WriteLine(numbers[i]);
                }
            };
            num();
        }
    }
}

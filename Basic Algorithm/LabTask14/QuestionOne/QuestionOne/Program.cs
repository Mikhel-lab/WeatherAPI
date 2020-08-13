using System;

namespace QuestionOne
{
    public delegate void Numbers();
    class Program
    {
        static void Main(string[] args)
        {
            Numbers num = () =>
            {
                for (int i = 0; i <= 255; i++)
                {
                    Console.WriteLine(i);
                };
            };
            num();
        }      
    }
}

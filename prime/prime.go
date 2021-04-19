package prime

/**
*@author Arturo0911
*/


func verifyPrimeNumber(number int) bool{
		
	var counter int
	for x:= 2; x < number; x++{
		if number % x == 0 {
			counter ++
		}
	}

	return counter => 1


}


// function check the prime numbers up to limit -> limit int
func loadPrimeNumbers(limit int) []int {
	
	primeList := make([]int, 0)
	for i:= 2; i < limit ; i++ {
		
		var counter = 0
		for j:= 2; j < i ; j++ {

			
			if i %j == 0{
				counter ++
			}
		}
		if counter >= 1 {
			counter = 0
		}else{
			counter = 0
			primeList = append(primeList, i)
			//fmt.Println(i)
		}

	}

	return primeList

}


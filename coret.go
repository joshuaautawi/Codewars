package kata

// import "math"

func TwiceAsOld(dadYearsOld, sonYearsOld int) int {
	// Implement me
	if dadYearsOld/sonYearsOld == 0 {
		return 0
	}
	if sonYearsOld == 0 || dadYearsOld == 0 {
		return dadYearsOld
	}
	if dadYearsOld/sonYearsOld < 2 {
		return (dadYearsOld / 2) - sonYearsOld

	}
	if dadYearsOld/sonYearsOld > 2 {
		return sonYearsOld*2 - dadYearsOld
	}
	return 0
}

new Splide( '.splide', {
  type   : 'slide',
  perPage: 4,
  perMove: 1,
  gap: 30,
  padding: 0,
  drag: true,
  pagination: false,
  breakpoints: {
		1020: {
			perPage: 3,
      drag: 'free',
      padding: { left: 0, right: 100 },
		},
    870: {
			perPage: 2,
      padding: { left: 0, right: 200 },
		},
    750: {
			perPage: 2,
      padding: { left: 0, right: 100 },
		},
    640: {
			perPage: 2,
      padding: { left: 0, right: 50 },
      gap: 30,
		},
    580: {
			perPage: 1,
      padding: { left: 0, right: 150 },
      gap: 15,
		},
    430: {
			perPage: 1,
      padding: { left: 0, right: 100 },
      gap: 5,
		},
    360: {
			perPage: 1,
      padding: { left: 0, right: 50 },
      gap: 5,
		},
    340: {
			perPage: 1,
      padding: { left: 0, right: 10 },
      gap: 5,
		},
  }
} ).mount();
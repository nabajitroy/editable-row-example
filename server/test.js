var arr = 
   { 
         "2020-W1": [
         { 
            "type": "TAX_REFUND_IN_INT", 
            "net_amount_base": "500001"
         },
         { 
            "type": "TAX_REFUNDIN_IN_EXT", 
            "net_amount_base": "500002"
         }
      ],
      "2020-W2": [
         { 
            "type": "RENTAL_LEASING_INCOME_IN_INT", 
            "net_amount_base": "5000"
         },
         { 
            "type": "DIVIDENTS_INCOME_IN_INT", 
            "net_amount_base": "15000"
         },
         { 
            "type": "LICENCE_INCOME_IN_EXT", 
            "net_amount_base": "10000"
         },
         { 
            "type": "OTHER_INCOME_IN_EXT", 
            "net_amount_base": "1000"
         } 
      ] 
   } 
 
const res = Object.keys(arr).map((year_week) => {
  const typeAmounts = Object.keys(arr[year_week]).reduce(
    (acc, index) => ({
      ...acc,
      [arr[year_week][index].type]: arr[year_week][index].net_amount_base,
    }),
    {}
  )
  return {
    year_week,
    ...typeAmounts,
  }
})

console.log(res)
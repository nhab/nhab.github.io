options=[
        {GrpTitle:"Basic Terminology",
            items:
            [
                {title:"quotation(offers)",
            body:
`
Currencies are quoted (offered) in pairs.

For example:
     the <h7>EUR/USD</h7> is the <h7>euro/U.S. Dollar</h7> pair. 

Using this quotation, the value of a currency 
is determined by its comparison to another currency.

The 1st currency of a currency pair is called the <h7>base currency</h7>, 
and the 2nd currency is called the <h7>quote currency</h7>.`
                },
                {title:"Ask and Bid Quotes",
                body:`
There are 2 parts to a forex quote:
an <b>ask</b> and a <b>bid</b>.

- The 'bid' is the prices quoted for an immediate <h7>sale (SELL)</h7> 
- The 'Ask' is an immediate <h7>purchase (BUY)</h7> request.

For example, the quote:
EUR/USD = 1.3600/05 (or EUR/USD  = 1.3600/1.3605)

Here the bid is 1.3600, 
and the ask is 1.3605. 
<img src='1-bid-ask_spread.png' />
`
                },
                {title:"What is Spread,BID and ask",
                    body:`The spread is the difference between 
    the BID and the ASK price in the market quotes. 
    The ASK price is applicable to a BUY order and the BID price
    is applicable to a SELL order.
    some brokers operates using variable spreads, 
    which will condense and widen as market conditions 
    and liquidity change.`
                },
                { title:"Long and short",
                body:`
long  -> will profit if it rises in relative value, 
short -> will profit if it falls in relative value.
<img src='2-shortLong.png' />`
                },
                {title:"Leverage",
                body:
    `Leverage is the ability to control a larger amount of money than our capital in the forex markets.
    For example: Pepperstone offers up to 500:1 leverage, 
    which means for every $1 that you have in your trading account; 
    you can trade $500 on the forex market. 
               },
                    {title:"Lot",
                    body:
`Minimum volume amount of a trade.In the past, spot forex was only traded in specific amounts called lots, 
or basically the number of currency units you will buy or sell.				
The standard size for a lot is 100,000 units of currency, 
and now, there are also a mini, micro, and nano lot sizes 
that are 10,000, 1,000, and 100 units respectively.
`},
                {title:"Margin",
                body:
    `Margin is the amount of money required in your account in order to open a trade.

    Margin may be calculated as follows: 
        (Current Market Quote * Volume) / Leverage = $Margin Required

    For example:

    A trader wants to open 0.1 (10,000 base currency) lots of EUR/USD
     at the current market quote of 1.4177 and with a leverage level of 1:200.
    The base currency of the account is USD.
    (1.4177 * 10,000) / 200 = $70.89 required to open a 0.1 lot position
    `
                },
                {title:"Margin Call",
                body:`
A margin call is a warning message that occurs when 
a trader’s account is running out of sufficient funds to sustain their current open positions on the market.

If the market moves against a trader’s position/s, additional funds will be requested through a "margin call".

If there are insufficient available funds, the trader's open positions will be closed out

If a trader’s Equity (Balance - Open Profit/Loss) falls below a specific margin level
which is the amount required to support open positions,
then the trader’s positions will automatically be closed. 

This is to assist in protecting you from negative equity
 although you should not rely on us providing such protection.
It is sensible to maintain adequate funding in your account. 

This is calculated as follows for the MetaTrader 4 platform: Equity / Margin = < 20%

This is calculated as follows for the cTrader platform: Equity / Margin = < 50%

It is important to note that although the above mechanism may protect you from negative equity,
 it is not a guaranteed protection. 

 In the event of certain pricing actions beyond our control 
 (for example market volatility or the market closing and then opening again at a different rate,
such as on a weekend) 
your positions may not be automatically closed at the margin levels set out above. 
As a result there is a risk that you could be left with a negative equity balance in your account. 
`

                }     ,
                {title:"Stop Loss and take profit",
                body:
`When placing an order,the stop loss and take profit can be specified:

They will close the order automatically to protect your money:  

- for <h7>Stop Loss</h7> : when  the market moves against the position
- for <h7>Take Profit</h7> : when the price reaches your specified profit target. 
`
                },
                {title:"Trailing Stop",
                body:
                `
When a Trailing Stop is placed, 
 the level of the Stop Loss will change along with price movement
 to protect gained profits. 

If you open a Buy position,
 and the price of the instrument increases by a certain number of points,
with a Trailing Stop, the level of the Stop Loss will increase as well. 

If you open a Sell position and the price of the instrument falls,
a Trailing Stop order will cause the level of the stop order to decrease as well. 
`
                },
                {title:"Hedging",
                body:`
Hedging refers to the opening of a new position in the opposite direction
of an existing position on the same instrument.

For example: 
    To hedge a 0.1 lot Buy position on AUD/USD,
    you would open a 0.1 lot Sell position on AUD/USD

No additional margin is required to hedge a position. 
                `},
                {title:"Rollovers/Swaps",
                body:
                `Forex trading may also generate interest income as well as capital gains. Since forex is traded in pairs,
                every trade involves not only two different currencies, but their two different interest rates.

                If the interest rate of the currency a trader bought is higher than the interest rate of the currency a trader sold, 
                then the trader will earn interest or “rollover” (positive roll).

                If the interest rate on the currency the trader bought is lower than the interest rate on the currency you sold, 
                then the trader will pay rollover (negative roll).

                Rollovers/swaps can add a significant extra cost or profit to a trade.
                The rollover amount increases/decreases as the position size increases/decreases.

                Rollovers take place at 5pm EST (New York Time)`
                },
                {title:"Commissions",
                body:
                `These are fees that Pepperstone charges on the Razor account only. The commission amount equates to:

                Lot Size	Commission Amount	Notes
                0.01

                0.1

                1	AU$0.07

                AU$0.70

                AU$7	Round turn means that commission is only paid when positions are closed
                ** The commission amount increases/decreases as the position size increases/decrease
                `},
                {title:"Virtual Private Server (VPS)",
                body:`A VPS is used to keep the Meta-Trader 4 platform running even if the trader exits the program.
                This minimizes the chance of system downtime due to technology and connectivity failures.
                `},
                {title:"MAM/PAMM Accounts",
                body:
`Multi Account Manager account types on the Meta-Trader 4 platform 
are designed for Money Managers who trade on behalf of other investors 
and manage multiple accounts from a single interface. 
Money Managers can also manage multiple accounts by utilising Expert Advisors (EAs).
`
                },
                {title:"Safe Haven Currencies",
                body:
`This is a term used to describe trading an alternative currency or
    instrument that is less volatile as a result of market turmoil and uncertainty.
Safe haven currencies or instruments are considered low risk 
because their issuing governments are stable and their economies tend to be strong, 
however, this does not necessarily mean that they are ‘safe’.`
                }
            ]
        },
        {GrpTitle:"Metatradier How to s",
        items:
        [
            {title:"How to Activate an EA:",
            body:
            `Drag the EA from the Expert Advisors section of the Navigator window onto the chart. 
            This should open the settings window
            In the settings window navigate to the “Common” tab.
             Please make sure that “Allow Live Trading” and “Allow DLL imports” are both checked. 
            Then press “OK”
            In the top tool bar you will see a button that says “AutoTrading” Make sure that it is clicked.
            If all steps were followed correctly the top right corner of the chart should have a “smiley face”
            
            In the top tool bar you will see a button that says “AutoTrading” Make sure that it is clicked.
            `
            }
        ]
        }
    ]

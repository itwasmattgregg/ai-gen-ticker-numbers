import {Page, LegacyCard, Button} from '@shopify/polaris'
import {useState} from 'react'
import NumberTicker from './components/NumberTicker'

export default function App() {
  const [value, setValue] = useState(0)

  const handleClick = () => {
    setValue(Math.floor(Math.random() * 10000))
  }

  return (
    <Page>
      <LegacyCard sectioned>
        <NumberTicker value={value} />
        <div style={{marginTop: '1rem'}}>
          <Button onClick={handleClick}>Generate Random Number</Button>
        </div>
      </LegacyCard>
    </Page>
  )
}

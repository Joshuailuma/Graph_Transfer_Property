import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address, BigInt } from "@graphprotocol/graph-ts"
import { ItemSold } from "../generated/schema"
import { ItemSold as ItemSoldEvent } from "../generated/TransferProperty/TransferProperty"
import { handleItemSold } from "../src/transfer-property"
import { createItemSoldEvent } from "./transfer-property-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let ownerAddress = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let propertyAddress = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let tokenId = BigInt.fromI32(234)
    let newItemSoldEvent = createItemSoldEvent(
      ownerAddress,
      propertyAddress,
      tokenId
    )
    handleItemSold(newItemSoldEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("ItemSold created and stored", () => {
    assert.entityCount("ItemSold", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "ItemSold",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "ownerAddress",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "ItemSold",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "propertyAddress",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "ItemSold",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "tokenId",
      "234"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})

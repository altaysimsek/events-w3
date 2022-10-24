// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract Events{

    address public ownerOfContract;
    struct Event{
        uint256 eventId;
        string title;
        string description;
        string imageUrl;
        address[] attendees; 
    }
    
    Event[] public events;

    constructor() {
        ownerOfContract = msg.sender;
    }

    function getEvents() public view returns(Event[] memory){
        return events;
    }

    function createEvent(string calldata _title, string calldata _description, string calldata _imageUrl) external {
        require(msg.sender == ownerOfContract, "You are not the owner of the contract");
        uint256 eventId = events.length;
        Event memory newEvent = Event(eventId, _title, _description, _imageUrl, new address[](0));
        events.push(newEvent);
    }

    //any user can attend an event
    function attendEvent(uint256 _eventId) external {
        Event storage eventToAttend = events[_eventId];
        eventToAttend.attendees.push(msg.sender);
    }

}
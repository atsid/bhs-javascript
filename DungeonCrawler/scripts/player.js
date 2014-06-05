function Player(name, position) {
    var playerInfo = {
        name: name,
        position: position,
        gold: 0,
        experience: 0,
        level: 1,
        equipment: [],
        weapon: undefined
    };

    this.isPlayerAgent = function() {
        return true;
    }
    
    this.getPosition = function() {
        return playerInfo.position;
    }
    
    this.getName = function() {
        return playerInfo.name;
    }
    
    this.getGold = function() {
        return playerInfo.gold;
    }
    
    this.acceptGold = function(value) {
        this.playerInfo.gold += value;
    }
    
    this.acceptEquipment = function(value) {
        this.playerInfo.equipment.push(value);
    }
    
    this.combat = function(moster) {
        // TODO : Resolve combat.
    }
}

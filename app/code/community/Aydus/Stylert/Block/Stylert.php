<?php

/**
 * Stylert block
 *
 * @category    Aydus
 * @package     Aydus_Stylert
 * @author     	Aydus Consulting <davidt@aydus.com>
 */

class Aydus_Stylert_Block_Stylert extends Mage_Core_Block_Template
{
    public function getEnabled()
    {
        return (Mage::getStoreConfig('design/stylert/enabled')) ? 'true' : 'false';        
    }
	
    public function getHeaderText() 
    {
        return Mage::getStoreConfig('design/stylert/header_text');
    }
    
    public function getMessageTextAfter()
    {
        return Mage::getStoreConfig('design/stylert/message_text_after');
    }
}
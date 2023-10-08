// Automatically generated with Reach 0.1.13 (88e48902)
pragma abicoder v2;
pragma solidity ^0.8.17;

/**
 * @dev Interface of the ERC20 standard as defined in the EIP.
 */
interface IERC20 {
    /**
     * @dev Returns the amount of tokens in existence.
     */
    function totalSupply() external view returns (uint256);

    /**
     * @dev Returns the amount of tokens owned by `account`.
     */
    function balanceOf(address account) external view returns (uint256);

    /**
     * @dev Moves `amount` tokens from the caller's account to `to`.
     *
     * Returns a boolean value indicating whether the operation succeeded.
     *
     * Emits a {Transfer} event.
     */
    function transfer(address to, uint256 amount) external returns (bool);

    /**
     * @dev Returns the remaining number of tokens that `spender` will be
     * allowed to spend on behalf of `owner` through {transferFrom}. This is
     * zero by default.
     *
     * This value changes when {approve} or {transferFrom} are called.
     */
    function allowance(address owner, address spender) external view returns (uint256);

    /**
     * @dev Sets `amount` as the allowance of `spender` over the caller's tokens.
     *
     * Returns a boolean value indicating whether the operation succeeded.
     *
     * IMPORTANT: Beware that changing an allowance with this method brings the risk
     * that someone may use both the old and the new allowance by unfortunate
     * transaction ordering. One possible solution to mitigate this race
     * condition is to first reduce the spender's allowance to 0 and set the
     * desired value afterwards:
     * https://github.com/ethereum/EIPs/issues/20#issuecomment-263524729
     *
     * Emits an {Approval} event.
     */
    function approve(address spender, uint256 amount) external returns (bool);

    /**
     * @dev Moves `amount` tokens from `from` to `to` using the
     * allowance mechanism. `amount` is then deducted from the caller's
     * allowance.
     *
     * Returns a boolean value indicating whether the operation succeeded.
     *
     * Emits a {Transfer} event.
     */
    function transferFrom(
        address from,
        address to,
        uint256 amount
    ) external returns (bool);

    /**
     * @dev Emitted when `value` tokens are moved from one account (`from`) to
     * another (`to`).
     *
     * Note that `value` may be zero.
     */
    event Transfer(address indexed from, address indexed to, uint256 value);

    /**
     * @dev Emitted when the allowance of a `spender` for an `owner` is set by
     * a call to {approve}. `value` is the new allowance.
     */
    event Approval(address indexed owner, address indexed spender, uint256 value);
}

/**
 * @dev Interface for the optional metadata functions from the ERC20 standard.
 *
 * _Available since v4.1._
 */
interface IERC20Metadata is IERC20 {
    /**
     * @dev Returns the name of the token.
     */
    function name() external view returns (string memory);

    /**
     * @dev Returns the symbol of the token.
     */
    function symbol() external view returns (string memory);

    /**
     * @dev Returns the decimals places of the token.
     */
    function decimals() external view returns (uint8);
}

/**
 * @dev Provides information about the current execution context, including the
 * sender of the transaction and its data. While these are generally available
 * via msg.sender and msg.data, they should not be accessed in such a direct
 * manner, since when dealing with meta-transactions the account sending and
 * paying for execution may not be the actual sender (as far as an application
 * is concerned).
 *
 * This contract is only required for intermediate, library-like contracts.
 */
abstract contract Context {
    function _msgSender() internal view virtual returns (address) {
        return msg.sender;
    }

    function _msgData() internal view virtual returns (bytes calldata) {
        return msg.data;
    }
}

/**
 * @dev Implementation of the {IERC20} interface.
 *
 * This implementation is agnostic to the way tokens are created. This means
 * that a supply mechanism has to be added in a derived contract using {_mint}.
 * For a generic mechanism see {ERC20PresetMinterPauser}.
 *
 * TIP: For a detailed writeup see our guide
 * https://forum.zeppelin.solutions/t/how-to-implement-erc20-supply-mechanisms/226[How
 * to implement supply mechanisms].
 *
 * We have followed general OpenZeppelin Contracts guidelines: functions revert
 * instead returning `false` on failure. This behavior is nonetheless
 * conventional and does not conflict with the expectations of ERC20
 * applications.
 *
 * Additionally, an {Approval} event is emitted on calls to {transferFrom}.
 * This allows applications to reconstruct the allowance for all accounts just
 * by listening to said events. Other implementations of the EIP may not emit
 * these events, as it isn't required by the specification.
 *
 * Finally, the non-standard {decreaseAllowance} and {increaseAllowance}
 * functions have been added to mitigate the well-known issues around setting
 * allowances. See {IERC20-approve}.
 */
contract ERC20 is Context, IERC20, IERC20Metadata {
    mapping(address => uint256) private _balances;

    mapping(address => mapping(address => uint256)) private _allowances;

    uint256 private _totalSupply;

    string private _name;
    string private _symbol;

    /**
     * @dev Sets the values for {name} and {symbol}.
     *
     * The default value of {decimals} is 18. To select a different value for
     * {decimals} you should overload it.
     *
     * All two of these values are immutable: they can only be set once during
     * construction.
     */
    constructor(string memory name_, string memory symbol_) {
        _name = name_;
        _symbol = symbol_;
    }

    /**
     * @dev Returns the name of the token.
     */
    function name() public view virtual override returns (string memory) {
        return _name;
    }

    /**
     * @dev Returns the symbol of the token, usually a shorter version of the
     * name.
     */
    function symbol() public view virtual override returns (string memory) {
        return _symbol;
    }

    /**
     * @dev Returns the number of decimals used to get its user representation.
     * For example, if `decimals` equals `2`, a balance of `505` tokens should
     * be displayed to a user as `5.05` (`505 / 10 ** 2`).
     *
     * Tokens usually opt for a value of 18, imitating the relationship between
     * Ether and Wei. This is the value {ERC20} uses, unless this function is
     * overridden;
     *
     * NOTE: This information is only used for _display_ purposes: it in
     * no way affects any of the arithmetic of the contract, including
     * {IERC20-balanceOf} and {IERC20-transfer}.
     */
    function decimals() public view virtual override returns (uint8) {
        return 18;
    }

    /**
     * @dev See {IERC20-totalSupply}.
     */
    function totalSupply() public view virtual override returns (uint256) {
        return _totalSupply;
    }

    /**
     * @dev See {IERC20-balanceOf}.
     */
    function balanceOf(address account) public view virtual override returns (uint256) {
        return _balances[account];
    }

    /**
     * @dev See {IERC20-transfer}.
     *
     * Requirements:
     *
     * - `to` cannot be the zero address.
     * - the caller must have a balance of at least `amount`.
     */
    function transfer(address to, uint256 amount) public virtual override returns (bool) {
        address owner = _msgSender();
        _transfer(owner, to, amount);
        return true;
    }

    /**
     * @dev See {IERC20-allowance}.
     */
    function allowance(address owner, address spender) public view virtual override returns (uint256) {
        return _allowances[owner][spender];
    }

    /**
     * @dev See {IERC20-approve}.
     *
     * NOTE: If `amount` is the maximum `uint256`, the allowance is not updated on
     * `transferFrom`. This is semantically equivalent to an infinite approval.
     *
     * Requirements:
     *
     * - `spender` cannot be the zero address.
     */
    function approve(address spender, uint256 amount) public virtual override returns (bool) {
        address owner = _msgSender();
        _approve(owner, spender, amount);
        return true;
    }

    /**
     * @dev See {IERC20-transferFrom}.
     *
     * Emits an {Approval} event indicating the updated allowance. This is not
     * required by the EIP. See the note at the beginning of {ERC20}.
     *
     * NOTE: Does not update the allowance if the current allowance
     * is the maximum `uint256`.
     *
     * Requirements:
     *
     * - `from` and `to` cannot be the zero address.
     * - `from` must have a balance of at least `amount`.
     * - the caller must have allowance for ``from``'s tokens of at least
     * `amount`.
     */
    function transferFrom(
        address from,
        address to,
        uint256 amount
    ) public virtual override returns (bool) {
        address spender = _msgSender();
        _spendAllowance(from, spender, amount);
        _transfer(from, to, amount);
        return true;
    }

    /**
     * @dev Atomically increases the allowance granted to `spender` by the caller.
     *
     * This is an alternative to {approve} that can be used as a mitigation for
     * problems described in {IERC20-approve}.
     *
     * Emits an {Approval} event indicating the updated allowance.
     *
     * Requirements:
     *
     * - `spender` cannot be the zero address.
     */
    function increaseAllowance(address spender, uint256 addedValue) public virtual returns (bool) {
        address owner = _msgSender();
        _approve(owner, spender, _allowances[owner][spender] + addedValue);
        return true;
    }

    /**
     * @dev Atomically decreases the allowance granted to `spender` by the caller.
     *
     * This is an alternative to {approve} that can be used as a mitigation for
     * problems described in {IERC20-approve}.
     *
     * Emits an {Approval} event indicating the updated allowance.
     *
     * Requirements:
     *
     * - `spender` cannot be the zero address.
     * - `spender` must have allowance for the caller of at least
     * `subtractedValue`.
     */
    function decreaseAllowance(address spender, uint256 subtractedValue) public virtual returns (bool) {
        address owner = _msgSender();
        uint256 currentAllowance = _allowances[owner][spender];
        require(currentAllowance >= subtractedValue, "ERC20: decreased allowance below zero");
        unchecked {
            _approve(owner, spender, currentAllowance - subtractedValue);
        }

        return true;
    }

    /**
     * @dev Moves `amount` of tokens from `sender` to `recipient`.
     *
     * This internal function is equivalent to {transfer}, and can be used to
     * e.g. implement automatic token fees, slashing mechanisms, etc.
     *
     * Emits a {Transfer} event.
     *
     * Requirements:
     *
     * - `from` cannot be the zero address.
     * - `to` cannot be the zero address.
     * - `from` must have a balance of at least `amount`.
     */
    function _transfer(
        address from,
        address to,
        uint256 amount
    ) internal virtual {
        require(from != address(0), "ERC20: transfer from the zero address");
        require(to != address(0), "ERC20: transfer to the zero address");

        _beforeTokenTransfer(from, to, amount);

        uint256 fromBalance = _balances[from];
        require(fromBalance >= amount, "ERC20: transfer amount exceeds balance");
        unchecked {
            _balances[from] = fromBalance - amount;
        }
        _balances[to] += amount;

        emit Transfer(from, to, amount);

        _afterTokenTransfer(from, to, amount);
    }

    /** @dev Creates `amount` tokens and assigns them to `account`, increasing
     * the total supply.
     *
     * Emits a {Transfer} event with `from` set to the zero address.
     *
     * Requirements:
     *
     * - `account` cannot be the zero address.
     */
    function _mint(address account, uint256 amount) internal virtual {
        require(account != address(0), "ERC20: mint to the zero address");

        _beforeTokenTransfer(address(0), account, amount);

        _totalSupply += amount;
        _balances[account] += amount;
        emit Transfer(address(0), account, amount);

        _afterTokenTransfer(address(0), account, amount);
    }

    /**
     * @dev Destroys `amount` tokens from `account`, reducing the
     * total supply.
     *
     * Emits a {Transfer} event with `to` set to the zero address.
     *
     * Requirements:
     *
     * - `account` cannot be the zero address.
     * - `account` must have at least `amount` tokens.
     */
    function _burn(address account, uint256 amount) internal virtual {
        require(account != address(0), "ERC20: burn from the zero address");

        _beforeTokenTransfer(account, address(0), amount);

        uint256 accountBalance = _balances[account];
        require(accountBalance >= amount, "ERC20: burn amount exceeds balance");
        unchecked {
            _balances[account] = accountBalance - amount;
        }
        _totalSupply -= amount;

        emit Transfer(account, address(0), amount);

        _afterTokenTransfer(account, address(0), amount);
    }

    /**
     * @dev Sets `amount` as the allowance of `spender` over the `owner` s tokens.
     *
     * This internal function is equivalent to `approve`, and can be used to
     * e.g. set automatic allowances for certain subsystems, etc.
     *
     * Emits an {Approval} event.
     *
     * Requirements:
     *
     * - `owner` cannot be the zero address.
     * - `spender` cannot be the zero address.
     */
    function _approve(
        address owner,
        address spender,
        uint256 amount
    ) internal virtual {
        require(owner != address(0), "ERC20: approve from the zero address");
        require(spender != address(0), "ERC20: approve to the zero address");

        _allowances[owner][spender] = amount;
        emit Approval(owner, spender, amount);
    }

    /**
     * @dev Spend `amount` form the allowance of `owner` toward `spender`.
     *
     * Does not update the allowance amount in case of infinite allowance.
     * Revert if not enough allowance is available.
     *
     * Might emit an {Approval} event.
     */
    function _spendAllowance(
        address owner,
        address spender,
        uint256 amount
    ) internal virtual {
        uint256 currentAllowance = allowance(owner, spender);
        if (currentAllowance != type(uint256).max) {
            require(currentAllowance >= amount, "ERC20: insufficient allowance");
            unchecked {
                _approve(owner, spender, currentAllowance - amount);
            }
        }
    }

    /**
     * @dev Hook that is called before any transfer of tokens. This includes
     * minting and burning.
     *
     * Calling conditions:
     *
     * - when `from` and `to` are both non-zero, `amount` of ``from``'s tokens
     * will be transferred to `to`.
     * - when `from` is zero, `amount` tokens will be minted for `to`.
     * - when `to` is zero, `amount` of ``from``'s tokens will be burned.
     * - `from` and `to` are never both zero.
     *
     * To learn more about hooks, head to xref:ROOT:extending-contracts.adoc#using-hooks[Using Hooks].
     */
    function _beforeTokenTransfer(
        address from,
        address to,
        uint256 amount
    ) internal virtual {}

    /**
     * @dev Hook that is called after any transfer of tokens. This includes
     * minting and burning.
     *
     * Calling conditions:
     *
     * - when `from` and `to` are both non-zero, `amount` of ``from``'s tokens
     * has been transferred to `to`.
     * - when `from` is zero, `amount` tokens have been minted for `to`.
     * - when `to` is zero, `amount` of ``from``'s tokens have been burned.
     * - `from` and `to` are never both zero.
     *
     * To learn more about hooks, head to xref:ROOT:extending-contracts.adoc#using-hooks[Using Hooks].
     */
    function _afterTokenTransfer(
        address from,
        address to,
        uint256 amount
    ) internal virtual {}
}
/*
  ReachToken essentially emulates Algorand Standard Assets on Ethereum, but doesn't include things like clawback or a separation of management and creator.
 */
contract ReachToken is ERC20 {
  address private _creator;
  string private _url;
  string private _metadata;
  uint8 private _decimals;

  constructor (
    string memory name_,
    string memory symbol_,
    string memory url_,
    string memory metadata_,
    uint256 supply_,
    uint256 decimals_
  ) ERC20(name_, symbol_) {
    _creator = _msgSender();
    _mint(_creator, supply_);
    _url = url_;
    _metadata = metadata_;
    _decimals = uint8(decimals_);
  }

  function url() public view returns (string memory) { return _url; }

  function metadata() public view returns (string memory) { return _metadata; }

  function decimals() public view override returns (uint8) { return _decimals; }

  function burn(uint256 amount) public virtual returns (bool) {
    require(_msgSender() == _creator, "must be creator");
    _burn(_creator, amount);
    return true;
  }

  function destroy() public virtual {
    require(_msgSender() == _creator, "must be creator");
    require(totalSupply() == 0, "must be no supply");
    selfdestruct(payable(_creator));
  }
}

// Generated code includes meaning of numbers
error ReachError(uint256 msg);

contract Stdlib {
  function safeAdd(uint256 x, uint256 y) internal pure returns (uint256 z) {
    require((z = x + y) >= x, "add overflow"); }
  function safeSub(uint256 x, uint256 y) internal pure returns (uint256 z) {
    require((z = x - y) <= x, "sub wraparound"); }
  function safeMul(uint256 x, uint256 y) internal pure returns (uint256 z) {
    require(y == 0 || (z = x * y) / y == x, "mul overflow"); }
  function safeDiv(uint256 x, uint256 y) internal pure returns (uint256 z) {
    require(y != 0, "div by zero"); z = x / y; }
  function safeMod(uint256 x, uint256 y) internal pure returns (uint256 z) {
    require(y != 0, "div by zero"); z = x % y; }

  function unsafeAdd(uint256 x, uint256 y) internal pure returns (uint256 z) {
    unchecked { z = x + y; } }
  function unsafeSub(uint256 x, uint256 y) internal pure returns (uint256 z) {
    unchecked { z = x - y; } }
  function unsafeMul(uint256 x, uint256 y) internal pure returns (uint256 z) {
    unchecked { z = x * y; } }
  function unsafeDiv(uint256 x, uint256 y) internal pure returns (uint256 z) {
    unchecked { z = x / y; } }
  function unsafeMod(uint256 x, uint256 y) internal pure returns (uint256 z) {
    unchecked { z = x % y; } }

  function safeSqrt(uint256 y) internal pure returns (uint256 z) {
    if (y > 3) {
      z = y;
      uint256 x = y / 2 + 1;
      while (x < z) {
        z = x;
        x = (y / x + x) / 2;
      }
    } else if (y != 0) {
      z = 1;
    }
  }

  // From OpenZeppelin --- MIT license
  function uintToStringDyn(uint256 value) internal pure returns (string memory) {
        // Inspired by OraclizeAPI's implementation - MIT licence
        // https://github.com/oraclize/ethereum-api/blob/b42146b063c7d6ee1358846c198246239e9360e8/oraclizeAPI_0.4.25.sol

        if (value == 0) {
            return "0";
        }
        uint256 temp = value;
        uint256 digits;
        while (temp != 0) {
            digits++;
            temp /= 10;
        }
        bytes memory buffer = new bytes(digits);
        while (value != 0) {
            digits -= 1;
            buffer[digits] = bytes1(uint8(48 + uint256(value % 10)));
            value /= 10;
        }
        return string(buffer);
    }

  function reachRequire(bool succ, uint256 errMsg) internal pure {
    if ( ! succ ) {
      revert ReachError(errMsg);
    }
  }

  function checkFunReturn(bool succ, bytes memory returnData, uint256 errMsg) internal pure returns (bytes memory) {
    if (succ) {
      return returnData;
    } else {
      if (returnData.length > 0) {
        assembly {
          let returnData_size := mload(returnData)
          revert(add(32, returnData), returnData_size)
        }
      } else {
        revert ReachError(errMsg);
      }
    }
  }

  function tokenAllowance(address payable token, address owner, address spender) internal returns (uint256 amt) {
    (bool ok, bytes memory ret) = token.call{value: uint256(0)}(abi.encodeWithSelector(IERC20.allowance.selector, owner, spender));
    checkFunReturn(ok, ret, 0 /*'token.allowance'*/);
    amt = abi.decode(ret, (uint256));
  }

  function tokenTransferFrom(address payable token, address sender, address recipient, uint256 amt) internal returns (bool res) {
    (bool ok, bytes memory ret) = token.call{value: uint256(0)}(abi.encodeWithSelector(IERC20.transferFrom.selector, sender, recipient, amt));
    checkFunReturn(ok, ret, 1 /*'token.transferFrom'*/);
    res = abi.decode(ret, (bool));
  }

  function tokenTransfer(address payable token, address recipient, uint256 amt) internal returns (bool res) {
    (bool ok, bytes memory ret) = token.call{value: uint256(0)}(abi.encodeWithSelector(IERC20.transfer.selector, recipient, amt));
    checkFunReturn(ok, ret, 2 /*'token.transfer'*/);
    res = abi.decode(ret, (bool));
  }
  function safeTokenTransfer(address payable token, address recipient, uint256 amt) internal {
    require(tokenTransfer(token, recipient, amt));
  }

  function reachTokenBurn(address payable token, uint256 amt) internal returns (bool res) {
    (bool ok, bytes memory ret) = token.call{value: uint256(0)}(abi.encodeWithSelector(ReachToken.burn.selector, amt));
    checkFunReturn(ok, ret, 3 /*'token.burn'*/);
    res = abi.decode(ret, (bool));
  }
  function safeReachTokenBurn(address payable token, uint256 amt) internal {
    require(reachTokenBurn(token, amt));
  }

  function reachTokenDestroy(address payable token) internal returns (bool res) {
    (bool ok, bytes memory ret) = token.call{value: uint256(0)}(abi.encodeWithSelector(ReachToken.destroy.selector));
    checkFunReturn(ok, ret, 4 /*'token.destroy'*/);
    res = true;
  }
  function safeReachTokenDestroy(address payable token) internal {
    require(reachTokenDestroy(token));
  }

  function readPayAmt(address sender, address payable token) internal returns (uint256 amt) {
    amt = tokenAllowance(token, sender, address(this));
    require(checkPayAmt(sender, token, amt));
  }

  function checkPayAmt(address sender, address payable token, uint256 amt) internal returns (bool) {
    return tokenTransferFrom(token, sender, address(this), amt);
  }

  function tokenApprove(address payable token, address spender, uint256 amt) internal returns (bool res) {
    (bool ok, bytes memory ret) = token.call{value: uint256(0)}(abi.encodeWithSelector(IERC20.approve.selector, spender, amt));
    checkFunReturn(ok, ret, 5 /*'token.approve'*/);
    res = abi.decode(ret, (bool));
  }

  function tokenBalanceOf(address payable token, address owner) internal returns (uint256 res) {
    (bool ok, bytes memory ret) = token.call{value: uint256(0) }(abi.encodeWithSelector(IERC20.balanceOf.selector, owner));
    checkFunReturn(ok, ret, 6 /*'token.balanceOf'*/);
    res = abi.decode(ret, (uint256));
  }
}

enum _enum_T0 {None, Some}
struct T0 {
  _enum_T0 which;
  bool _None;
  bool _Some;
  }
struct T1 {
  uint256 _amountOfRaffleToken;
  address payable _asset;
  uint256 _cost;
  address payable _creator;
  uint256 _deadline;
  bool _isFeatured;
  address payable _raffleToken;
  }
enum _enum_T2 {None, Some}
struct T2 {
  _enum_T2 which;
  bool _None;
  address payable _Some;
  }
struct T4 {
  bool _adminClaimed;
  uint256 _bal;
  uint256 _buyers;
  bool _claimed;
  uint256 _currentUserNumber;
  bool _keepGoing;
  uint256 _percent;
  uint256 _raffleBal;
  T2 _winner;
  }
struct T5 {
  uint256 elem0;
  uint256 elem1;
  bool elem2;
  }
struct T7 {
  address payable v3506;
  address payable v3507;
  bool v3508;
  uint256 v3509;
  uint256 v3510;
  uint256 v3511;
  address payable v3513;
  uint256 v3514;
  address payable v3515;
  address payable v3516;
  uint256 v3547;
  T4 v3556;
  uint256 v3560;
  T5[2] v3563;
  uint256 v3564;
  bool v3586;
  uint256 v3596;
  uint256 v3597;
  T5 v3598;
  uint256 v3599;
  }
struct T8 {
  uint256 elem0;
  }
struct T9 {
  address payable elem0;
  }
enum _enum_T10 {User_buyTicket0_273, User_claim0_273, User_delete0_273, User_determinWinnerAfterDeadline0_273, User_optin0_273}
struct T10 {
  _enum_T10 which;
  T8 _User_buyTicket0_273;
  bool _User_claim0_273;
  bool _User_delete0_273;
  T9 _User_determinWinnerAfterDeadline0_273;
  bool _User_optin0_273;
  }
struct T11 {
  uint256 elem0;
  T10 elem1;
  }
struct T12 {
  uint256 elem0;
  address payable elem1;
  bool elem2;
  uint256 elem3;
  uint256 elem4;
  uint256 elem5;
  uint256 elem6;
  address payable elem7;
  uint256 elem8;
  address payable elem9;
  address payable elem10;
  }
struct T13 {
  address payable v3506;
  address payable v3507;
  bool v3508;
  uint256 v3509;
  uint256 v3510;
  uint256 v3511;
  uint256 v3512;
  address payable v3513;
  uint256 v3514;
  address payable v3515;
  address payable v3516;
  T5[2] v3525;
  }
struct T14 {
  address payable elem0;
  address payable elem1;
  bool elem2;
  uint256 elem3;
  uint256 elem4;
  uint256 elem5;
  address payable elem6;
  uint256 elem7;
  address payable elem8;
  address payable elem9;
  uint256 elem10;
  T4 elem11;
  uint256 elem12;
  uint256 elem13;
  T5[2] elem14;
  uint256 elem15;
  }
struct T15 {
  address payable _address;
  uint256 _amount;
  }
contract ReachContract is Stdlib {
  uint256 current_step;
  uint256 current_time;
    bytes current_svbs;
  uint256 creation_time;
     bool locked;
  function _reachCreationTime() external view returns (uint256) { return creation_time; }
  function _reachCurrentTime() external view returns (uint256) { return current_time; }
  function _reachCurrentState() external view returns (uint256, bytes memory) { return (current_step, current_svbs); }
  function array_set6(T5[2] memory arr, uint256 idx, T5 memory val) internal  returns (T5[2] memory arrp) {
    for (uint256 i = 0; i < 2; i++){
      arrp[i] = arr[i];
      }
    arrp[idx] = val;
    }
  event _reach_e0(address _who, T12 _a);
  event _reach_e1(address _who, T8 _a);
  event _reach_e3(address _who, T11 _a);
  event _reach_oe_v3986(bool v0);
  event _reach_oe_v4379(bool v0);
  event _reach_oe_v4734(bool v0);
  event _reach_oe_v5124(bool v0);
  event _reach_oe_v5473(bool v0);
  event bought(T15 v0);
  receive () external payable {}
  fallback () external payable {}
  mapping (address => T0) _reachm_0;
  function __reachm_0Ref(address addr) internal view returns (T0 memory res) {
    if (_reachm_0[addr].which == _enum_T0.Some) {
      res = _reachm_0[addr];
      }
    else {
      res.which = _enum_T0.None;
      res._None = false;
      }
    }
  function _reachm_0Ref(address addr) external view returns (T0 memory res) {
    res = __reachm_0Ref(addr);
    }
  struct Memory {
    bool nil;
    bool _reachr_Info_adminClaimed;
    uint256 _reachr_Info_balance;
    uint256 _reachr_Info_currentSec;
    uint256 _reachr_Info_currentTime;
    bool _reachr_Info_hasDeadlineReached;
    uint256 _reachr_Info_myTicketsAmount;
    bool _reachr_Info_opted;
    T1 _reachr_Info_props;
    uint256 _reachr_Info_randomNumber;
    uint256 _reachr_Info_ticketsBought;
    address payable _reachr_Info_token;
    bool _reachr_Info_userClaimed;
    T2 _reachr_Info_winner;
    bool _reachr_User_buyTicket;
    bool _reachr_User_claim;
    bool _reachr_User_delete;
    bool _reachr_User_determinWinnerAfterDeadline;
    bool _reachr_User_optin;
    }
  function _reacha_Info_adminClaimed(bool _a, Memory memory _Memory) internal view {
    reachRequire(((current_step == uint256(4))), uint256(7) /*'(./raffle_token_v4.rsh:48:17:property binding,[],Just "Incorrect state: not leaf")'*/);
    (T7 memory _svs) = abi.decode(current_svbs, (T7));
    _Memory._reachr_Info_adminClaimed = (_svs.v3556._adminClaimed);
    }
  function _reacha_Info_balance(bool _a, Memory memory _Memory) internal view {
    reachRequire(((current_step == uint256(4))), uint256(8) /*'(./raffle_token_v4.rsh:45:12:property binding,[],Just "Incorrect state: not leaf")'*/);
    (T7 memory _svs) = abi.decode(current_svbs, (T7));
    _Memory._reachr_Info_balance = _svs.v3599;
    }
  function _reacha_Info_currentSec(bool _a, Memory memory _Memory) internal view {
    reachRequire(((current_step == uint256(4))), uint256(9) /*'(./raffle_token_v4.rsh:42:15:property binding,[],Just "Incorrect state: not leaf")'*/);
    (T7 memory _svs) = abi.decode(current_svbs, (T7));
    _Memory._reachr_Info_currentSec = _svs.v3547;
    }
  function _reacha_Info_currentTime(bool _a, Memory memory _Memory) internal view {
    reachRequire(((current_step == uint256(4))), uint256(10) /*'(./raffle_token_v4.rsh:41:16:property binding,[],Just "Incorrect state: not leaf")'*/);
    (T7 memory _svs) = abi.decode(current_svbs, (T7));
    _Memory._reachr_Info_currentTime = _svs.v3560;
    }
  function _reacha_Info_hasDeadlineReached(bool _a, Memory memory _Memory) internal view {
    reachRequire(((current_step == uint256(4))), uint256(11) /*'(./raffle_token_v4.rsh:43:23:property binding,[],Just "Incorrect state: not leaf")'*/);
    (T7 memory _svs) = abi.decode(current_svbs, (T7));
    _Memory._reachr_Info_hasDeadlineReached = _svs.v3586;
    }
  function _reacha_Info_myTicketsAmount(address payable _a, Memory memory _Memory) internal view {
    reachRequire((false), uint256(12) /*'(./raffle_token_v4.rsh:44:20:property binding,[],Just "Incorrect state: empty blt")'*/);
    }
  function _reacha_Info_opted(address payable _a, Memory memory _Memory) internal view {
    reachRequire(((current_step == uint256(4))), uint256(13) /*'(./raffle_token_v4.rsh:40:10:property binding,[],Just "Incorrect state: not leaf")'*/);
    (T7 memory _svs) = abi.decode(current_svbs, (T7));
    _Memory._reachr_Info_opted = ((uint256((__reachm_0Ref((_a))).which)) == uint256(1));
    }
  struct _F7275 {
    T1 v3545;
    }
  function _reacha_Info_props(bool _a, Memory memory _Memory) internal view {
    _F7275 memory _f;
    reachRequire(((current_step == uint256(4))), uint256(14) /*'(./raffle_token_v4.rsh:50:10:property binding,[],Just "Incorrect state: not leaf")'*/);
    (T7 memory _svs) = abi.decode(current_svbs, (T7));
    _f.v3545._amountOfRaffleToken = _svs.v3514;
    _f.v3545._asset = _svs.v3507;
    _f.v3545._cost = _svs.v3511;
    _f.v3545._creator = _svs.v3515;
    _f.v3545._deadline = _svs.v3509;
    _f.v3545._isFeatured = _svs.v3508;
    _f.v3545._raffleToken = _svs.v3513;
    _Memory._reachr_Info_props = _f.v3545;
    }
  function _reacha_Info_randomNumber(bool _a, Memory memory _Memory) internal view {
    reachRequire(((current_step == uint256(4))), uint256(15) /*'(./raffle_token_v4.rsh:47:17:property binding,[],Just "Incorrect state: not leaf")'*/);
    (T7 memory _svs) = abi.decode(current_svbs, (T7));
    reachRequire((_svs.v3586), uint256(16) /*'(reach standard library:57:5:application,[at ./raffle_token_v4.rsh:151:14:application call to "check" (defined at: reach standard library:49:32:function exp),at ./raffle_token_v4.rsh:150:28:application call to [unknown function] (defined at: ./raffle_token_v4.rsh:150:28:application)],Just "Cannot view this till deadline")'*/);
    _Memory._reachr_Info_randomNumber = _svs.v3510;
    }
  function _reacha_Info_ticketsBought(bool _a, Memory memory _Memory) internal view {
    reachRequire(((current_step == uint256(4))), uint256(17) /*'(./raffle_token_v4.rsh:38:18:property binding,[],Just "Incorrect state: not leaf")'*/);
    (T7 memory _svs) = abi.decode(current_svbs, (T7));
    _Memory._reachr_Info_ticketsBought = (_svs.v3556._currentUserNumber);
    }
  function _reacha_Info_token(bool _a, Memory memory _Memory) internal view {
    reachRequire(((current_step == uint256(4))), uint256(18) /*'(./raffle_token_v4.rsh:46:10:property binding,[],Just "Incorrect state: not leaf")'*/);
    (T7 memory _svs) = abi.decode(current_svbs, (T7));
    _Memory._reachr_Info_token = _svs.v3513;
    }
  function _reacha_Info_userClaimed(bool _a, Memory memory _Memory) internal view {
    reachRequire(((current_step == uint256(4))), uint256(19) /*'(./raffle_token_v4.rsh:49:16:property binding,[],Just "Incorrect state: not leaf")'*/);
    (T7 memory _svs) = abi.decode(current_svbs, (T7));
    _Memory._reachr_Info_userClaimed = (_svs.v3556._claimed);
    }
  function _reacha_Info_winner(bool _a, Memory memory _Memory) internal view {
    reachRequire(((current_step == uint256(4))), uint256(20) /*'(./raffle_token_v4.rsh:39:11:property binding,[],Just "Incorrect state: not leaf")'*/);
    (T7 memory _svs) = abi.decode(current_svbs, (T7));
    _Memory._reachr_Info_winner = (_svs.v3556._winner);
    }
  struct _F7281 {
    T8 v7237;
    T10 v7238;
    }
  function _reacha_User_buyTicket(uint256 _a, Memory memory _Memory) internal  {
    _F7281 memory _f;
    _f.v7237.elem0 = _a;
    _f.v7238.which = _enum_T10.User_buyTicket0_273;
    _f.v7238._User_buyTicket0_273 = _f.v7237;
    T11  memory _ja;
    _ja.elem0 = (uint256(0));
    _ja.elem1 = _f.v7238;
    _reachi_3(_ja, _Memory);
    }
  struct _F7282 {
    bool v7242;
    T10 v7243;
    }
  function _reacha_User_claim(bool _a, Memory memory _Memory) internal  {
    _F7282 memory _f;
    _f.v7243.which = _enum_T10.User_claim0_273;
    _f.v7243._User_claim0_273 = _f.v7242;
    T11  memory _ja;
    _ja.elem0 = (uint256(0));
    _ja.elem1 = _f.v7243;
    _reachi_3(_ja, _Memory);
    }
  struct _F7283 {
    bool v7246;
    T10 v7247;
    }
  function _reacha_User_delete(bool _a, Memory memory _Memory) internal  {
    _F7283 memory _f;
    _f.v7247.which = _enum_T10.User_delete0_273;
    _f.v7247._User_delete0_273 = _f.v7246;
    T11  memory _ja;
    _ja.elem0 = (uint256(0));
    _ja.elem1 = _f.v7247;
    _reachi_3(_ja, _Memory);
    }
  struct _F7284 {
    T9 v7251;
    T10 v7252;
    }
  function _reacha_User_determinWinnerAfterDeadline(address payable _a, Memory memory _Memory) internal  {
    _F7284 memory _f;
    _f.v7251.elem0 = _a;
    _f.v7252.which = _enum_T10.User_determinWinnerAfterDeadline0_273;
    _f.v7252._User_determinWinnerAfterDeadline0_273 = _f.v7251;
    T11  memory _ja;
    _ja.elem0 = (uint256(0));
    _ja.elem1 = _f.v7252;
    _reachi_3(_ja, _Memory);
    }
  struct _F7285 {
    bool v7256;
    T10 v7257;
    }
  function _reacha_User_optin(bool _a, Memory memory _Memory) internal  {
    _F7285 memory _f;
    _f.v7257.which = _enum_T10.User_optin0_273;
    _f.v7257._User_optin0_273 = _f.v7256;
    T11  memory _ja;
    _ja.elem0 = (uint256(0));
    _ja.elem1 = _f.v7257;
    _reachi_3(_ja, _Memory);
    }
  struct _F7286 {
    T5 v3483;
    T5[2] v3484;
    T5[2] v3521;
    }
  function _reachi_0(T12 memory _a, Memory memory _Memory) internal  {
    _F7286 memory _f;
    reachRequire((! locked), uint256(21) /*'locked'*/);
    emit _reach_e0(msg.sender, _a);
    reachRequire((((_a.elem0) == uint256(0)) || (current_time == (_a.elem0))), uint256(22) /*'time check at ./raffle_token_v4.rsh:78:12:dot'*/);
    _f.v3483.elem0 = uint256(0);
    _f.v3483.elem1 = uint256(0);
    _f.v3483.elem2 = false;
    _f.v3484[0] = _f.v3483;
    _f.v3484[1] = _f.v3483;
    _f.v3521 = array_set6(_f.v3484, uint256(0), (T5({elem0: uint256(0), elem1: (_f.v3484[uint256(0)]).elem1, elem2: (_f.v3484[uint256(0)]).elem2})));
    reachRequire(((((_a.elem7) == (_a.elem1)) ? false : true)), uint256(23) /*'(./raffle_token_v4.rsh:78:12:dot,[],Just "non-network tokens distinct")'*/);
    reachRequire((((_a.elem5) < uint256(115792089237316195423570985008687907853269984665640564039457584007913129639935))), uint256(24) /*'(reach standard library:57:5:application,[at ./raffle_token_v4.rsh:91:10:application call to "check" (defined at: reach standard library:49:32:function exp)],Just "Cost too large")'*/);
    reachRequire((((_a.elem5) >= uint256(1))), uint256(25) /*'(reach standard library:57:5:application,[at ./raffle_token_v4.rsh:92:10:application call to "check" (defined at: reach standard library:49:32:function exp)],Just "Cost too small")'*/);
    
    
    reachRequire((msg.value == uint256(0)), uint256(26) /*'(./raffle_token_v4.rsh:78:12:dot,[],"verify network token pay amount")'*/);
    T13 memory nsvs;
    nsvs.v3506 = payable(msg.sender);
    nsvs.v3507 = (_a.elem1);
    nsvs.v3508 = (_a.elem2);
    nsvs.v3509 = (_a.elem3);
    nsvs.v3510 = (_a.elem4);
    nsvs.v3511 = (_a.elem5);
    nsvs.v3512 = (_a.elem6);
    nsvs.v3513 = (_a.elem7);
    nsvs.v3514 = (_a.elem8);
    nsvs.v3515 = (_a.elem9);
    nsvs.v3516 = (_a.elem10);
    nsvs.v3525 = (array_set6(_f.v3521, uint256(1), (T5({elem0: uint256(0), elem1: (_f.v3521[uint256(1)]).elem1, elem2: (_f.v3521[uint256(1)]).elem2}))));
    current_step = uint256(1);
    current_time = uint256(block.number);
    current_svbs = abi.encode(nsvs);
    }
  struct _F7287 {
    T5[2] v3543;
    T2 v3554;
    T4 v3555;
    }
  function _reachi_1(T8 memory _a, Memory memory _Memory) internal  {
    _F7287 memory _f;
    reachRequire((current_step == uint256(1)), uint256(27) /*'state check at ./raffle_token_v4.rsh:96:12:dot'*/);
    (T13 memory _svs) = abi.decode(current_svbs, (T13));
    reachRequire((! locked), uint256(28) /*'locked'*/);
    emit _reach_e1(msg.sender, _a);
    reachRequire((((_a.elem0) == uint256(0)) || (current_time == (_a.elem0))), uint256(29) /*'time check at ./raffle_token_v4.rsh:96:12:dot'*/);
    reachRequire((msg.value == _svs.v3512), uint256(30) /*'(./raffle_token_v4.rsh:96:12:dot,[],"verify network token pay amount")'*/);
    _f.v3543 = array_set6(_svs.v3525, uint256(1), (T5({elem0: (unsafeAdd(((_svs.v3525[uint256(1)]).elem0), _svs.v3514)), elem1: (_svs.v3525[uint256(1)]).elem1, elem2: (_svs.v3525[uint256(1)]).elem2})));
    reachRequire((checkPayAmt(msg.sender, _svs.v3513, _svs.v3514)), uint256(31) /*'(./raffle_token_v4.rsh:96:12:dot,[],"verify non-network token pay amount")'*/);
    reachRequire(((_svs.v3506 == payable(msg.sender))), uint256(32) /*'(./raffle_token_v4.rsh:96:12:dot,[],Just "sender correct")'*/);
    _f.v3554.which = _enum_T2.None;
    _f.v3554._None = false;
    _f.v3555._adminClaimed = false;
    _f.v3555._bal = ((_f.v3543[uint256(0)]).elem0);
    _f.v3555._buyers = uint256(0);
    _f.v3555._claimed = false;
    _f.v3555._currentUserNumber = uint256(0);
    _f.v3555._keepGoing = true;
    _f.v3555._percent = uint256(5);
    _f.v3555._raffleBal = ((_f.v3543[uint256(1)]).elem0);
    _f.v3555._winner = _f.v3554;
    T14  memory _ja;
    _ja.elem0 = _svs.v3506;
    _ja.elem1 = _svs.v3507;
    _ja.elem2 = _svs.v3508;
    _ja.elem3 = _svs.v3509;
    _ja.elem4 = _svs.v3510;
    _ja.elem5 = _svs.v3511;
    _ja.elem6 = _svs.v3513;
    _ja.elem7 = _svs.v3514;
    _ja.elem8 = _svs.v3515;
    _ja.elem9 = _svs.v3516;
    _ja.elem10 = (safeAdd(uint256(block.timestamp), _svs.v3509));
    _ja.elem11 = _f.v3555;
    _ja.elem12 = uint256(block.number);
    _ja.elem13 = uint256(block.timestamp);
    _ja.elem14 = _f.v3543;
    _ja.elem15 = _svs.v3512;
    _reachl_2(_ja, _Memory);
    }
  struct _F7288 {
    T8 v3849;
    uint256 v3859;
    T15 v3985;
    T4 v4008;
    address payable v4208;
    T5[2] v4362;
    uint256 v4369;
    T5[2] v4378;
    T4 v4396;
    T4 v4760;
    T9 v4827;
    uint256 v5103;
    T5[2] v5112;
    T5[2] v5123;
    T2 v5142;
    T4 v5143;
    }
  function _reachi_3(T11 memory _a, Memory memory _Memory) internal  {
    _F7288 memory _f;
    reachRequire((current_step == uint256(4)), uint256(33) /*'state check at ./raffle_token_v4.rsh:124:37:dot'*/);
    (T7 memory _svs) = abi.decode(current_svbs, (T7));
    reachRequire((! locked), uint256(34) /*'locked'*/);
    emit _reach_e3(msg.sender, _a);
    reachRequire((((_a.elem0) == uint256(0)) || (current_time == (_a.elem0))), uint256(35) /*'time check at ./raffle_token_v4.rsh:124:37:dot'*/);
    if ((_a.elem1).which == _enum_T10.User_buyTicket0_273) {
    _f.v3849 = (_a.elem1)._User_buyTicket0_273;
    reachRequire(((_svs.v3560 < _svs.v3547)), uint256(36) /*'(reach standard library:57:5:application,[at ./raffle_token_v4.rsh:158:12:application call to "check" (defined at: reach standard library:49:32:function exp),at ./raffle_token_v4.rsh:157:50:application call to [unknown function] (defined at: ./raffle_token_v4.rsh:157:50:function exp),at ./raffle_token_v4.rsh:124:37:application call to [unknown function] (defined at: ./raffle_token_v4.rsh:157:50:function exp),at ./raffle_token_v4.rsh:124:37:application call to [unknown function] (defined at: ./raffle_token_v4.rsh:124:37:function exp),at ./raffle_token_v4.rsh:138:14:application call to [unknown function] (defined at: ./raffle_token_v4.rsh:138:14:function exp)],Just "Deadline reached cannot enter")'*/);
    reachRequire((((_f.v3849.elem0) >= uint256(1))), uint256(37) /*'(reach standard library:57:5:application,[at ./raffle_token_v4.rsh:159:12:application call to "check" (defined at: reach standard library:49:32:function exp),at ./raffle_token_v4.rsh:157:50:application call to [unknown function] (defined at: ./raffle_token_v4.rsh:157:50:function exp),at ./raffle_token_v4.rsh:124:37:application call to [unknown function] (defined at: ./raffle_token_v4.rsh:157:50:function exp),at ./raffle_token_v4.rsh:124:37:application call to [unknown function] (defined at: ./raffle_token_v4.rsh:124:37:function exp),at ./raffle_token_v4.rsh:138:14:application call to [unknown function] (defined at: ./raffle_token_v4.rsh:138:14:function exp)],Just "Cannot purchase less than 1")'*/);
    _f.v3859 = safeMul((_f.v3849.elem0), _svs.v3511);
    reachRequire((msg.value == uint256(0)), uint256(38) /*'(./raffle_token_v4.rsh:124:37:dot,[],"verify network token pay amount")'*/);
    reachRequire((checkPayAmt(msg.sender, _svs.v3507, _f.v3859)), uint256(39) /*'(./raffle_token_v4.rsh:124:37:dot,[],"verify non-network token pay amount")'*/);
    reachRequire((checkPayAmt(msg.sender, _svs.v3513, uint256(0))), uint256(40) /*'(./raffle_token_v4.rsh:124:37:dot,[],"verify non-network token pay amount")'*/);
    _f.v3985._address = payable(msg.sender);
    _f.v3985._amount = (_f.v3849.elem0);
    emit bought( _f.v3985);
    emit _reach_oe_v3986( (true));
    _Memory._reachr_User_buyTicket = (true);
    _f.v4008._adminClaimed = (_svs.v3556._adminClaimed);
    _f.v4008._bal = (safeAdd(_svs.v3596, _f.v3859));
    _f.v4008._buyers = (safeAdd((_svs.v3556._buyers), uint256(1)));
    _f.v4008._claimed = (_svs.v3556._claimed);
    _f.v4008._currentUserNumber = (safeAdd((_svs.v3556._currentUserNumber), (_f.v3849.elem0)));
    _f.v4008._keepGoing = (_svs.v3556._keepGoing);
    _f.v4008._percent = (_svs.v3556._percent);
    _f.v4008._raffleBal = _svs.v3597;
    _f.v4008._winner = (_svs.v3556._winner);
    T14  memory _ja;
    _ja.elem0 = _svs.v3506;
    _ja.elem1 = _svs.v3507;
    _ja.elem2 = _svs.v3508;
    _ja.elem3 = _svs.v3509;
    _ja.elem4 = _svs.v3510;
    _ja.elem5 = _svs.v3511;
    _ja.elem6 = _svs.v3513;
    _ja.elem7 = _svs.v3514;
    _ja.elem8 = _svs.v3515;
    _ja.elem9 = _svs.v3516;
    _ja.elem10 = _svs.v3547;
    _ja.elem11 = _f.v4008;
    _ja.elem12 = uint256(block.number);
    _ja.elem13 = uint256(block.timestamp);
    _ja.elem14 = (array_set6(_svs.v3563, uint256(0), (T5({elem0: (unsafeAdd(_svs.v3599, _f.v3859)), elem1: _svs.v3598.elem1, elem2: _svs.v3598.elem2}))));
    _ja.elem15 = _svs.v3564;
    _reachl_2(_ja, _Memory);
    } else if ((_a.elem1).which == _enum_T10.User_claim0_273) {
    reachRequire((((uint256((_svs.v3556._winner).which)) == uint256(1))), uint256(41) /*'(reach standard library:57:5:application,[at ./raffle_token_v4.rsh:198:12:application call to "check" (defined at: reach standard library:49:32:function exp),at ./raffle_token_v4.rsh:196:26:application call to [unknown function] (defined at: ./raffle_token_v4.rsh:196:26:function exp),at ./raffle_token_v4.rsh:124:37:application call to [unknown function] (defined at: ./raffle_token_v4.rsh:196:26:function exp),at ./raffle_token_v4.rsh:124:37:application call to [unknown function] (defined at: ./raffle_token_v4.rsh:124:37:function exp),at ./raffle_token_v4.rsh:138:14:application call to [unknown function] (defined at: ./raffle_token_v4.rsh:138:14:function exp)],Just "Winner has not been determined")'*/);
    reachRequire((_svs.v3586), uint256(42) /*'(reach standard library:57:5:application,[at ./raffle_token_v4.rsh:199:12:application call to "check" (defined at: reach standard library:49:32:function exp),at ./raffle_token_v4.rsh:196:26:application call to [unknown function] (defined at: ./raffle_token_v4.rsh:196:26:function exp),at ./raffle_token_v4.rsh:124:37:application call to [unknown function] (defined at: ./raffle_token_v4.rsh:196:26:function exp),at ./raffle_token_v4.rsh:124:37:application call to [unknown function] (defined at: ./raffle_token_v4.rsh:124:37:function exp),at ./raffle_token_v4.rsh:138:14:application call to [unknown function] (defined at: ./raffle_token_v4.rsh:138:14:function exp)],Just "Cannot claim yet")'*/);
    reachRequire(((_svs.v3597 <= ((_svs.v3563[uint256(1)]).elem0))), uint256(43) /*'(reach standard library:57:5:application,[at ./raffle_token_v4.rsh:200:12:application call to "check" (defined at: reach standard library:49:32:function exp),at ./raffle_token_v4.rsh:196:26:application call to [unknown function] (defined at: ./raffle_token_v4.rsh:196:26:function exp),at ./raffle_token_v4.rsh:124:37:application call to [unknown function] (defined at: ./raffle_token_v4.rsh:196:26:function exp),at ./raffle_token_v4.rsh:124:37:application call to [unknown function] (defined at: ./raffle_token_v4.rsh:124:37:function exp),at ./raffle_token_v4.rsh:138:14:application call to [unknown function] (defined at: ./raffle_token_v4.rsh:138:14:function exp)],Just "Error transferring")'*/);
    _f.v4208 = ((_svs.v3556._winner).which == _enum_T2.Some ? (_svs.v3556._winner)._Some : _svs.v3506);
    reachRequire(((_f.v4208 == payable(msg.sender))), uint256(44) /*'(reach standard library:57:5:application,[at ./raffle_token_v4.rsh:204:12:application call to "check" (defined at: reach standard library:49:32:function exp),at ./raffle_token_v4.rsh:196:26:application call to [unknown function] (defined at: ./raffle_token_v4.rsh:196:26:function exp),at ./raffle_token_v4.rsh:124:37:application call to [unknown function] (defined at: ./raffle_token_v4.rsh:196:26:function exp),at ./raffle_token_v4.rsh:124:37:application call to [unknown function] (defined at: ./raffle_token_v4.rsh:124:37:function exp),at ./raffle_token_v4.rsh:138:14:application call to [unknown function] (defined at: ./raffle_token_v4.rsh:138:14:function exp)],Just "Not winner")'*/);
    reachRequire((msg.value == uint256(0)), uint256(45) /*'(./raffle_token_v4.rsh:124:37:dot,[],"verify network token pay amount")'*/);
    reachRequire((checkPayAmt(msg.sender, _svs.v3507, uint256(0))), uint256(46) /*'(./raffle_token_v4.rsh:124:37:dot,[],"verify non-network token pay amount")'*/);
    reachRequire((checkPayAmt(msg.sender, _svs.v3513, uint256(0))), uint256(47) /*'(./raffle_token_v4.rsh:124:37:dot,[],"verify non-network token pay amount")'*/);
    reachRequire(((uint256(block.timestamp) >= _svs.v3547)), uint256(48) /*'(reach standard library:57:5:application,[at ./raffle_token_v4.rsh:199:12:application call to "check" (defined at: reach standard library:49:32:function exp),at ./raffle_token_v4.rsh:207:13:application call to [unknown function] (defined at: ./raffle_token_v4.rsh:207:13:function exp)],Just "Cannot claim yet")'*/);
    _f.v4362 = array_set6(_svs.v3563, uint256(1), (T5({elem0: (unsafeSub(((_svs.v3563[uint256(1)]).elem0), ((_svs.v3563[uint256(1)]).elem0))), elem1: (_svs.v3563[uint256(1)]).elem1, elem2: (_svs.v3563[uint256(1)]).elem2})));
    safeTokenTransfer(_svs.v3513, _f.v4208, ((_svs.v3563[uint256(1)]).elem0));
    _f.v4369 = safeSub(((_f.v4362[uint256(0)]).elem0), (safeDiv((safeMul(((_f.v4362[uint256(0)]).elem0), uint256(5))), uint256(100))));
    _f.v4378 = array_set6(_f.v4362, uint256(0), (T5({elem0: (unsafeSub(((_f.v4362[uint256(0)]).elem0), _f.v4369)), elem1: (_f.v4362[uint256(0)]).elem1, elem2: (_f.v4362[uint256(0)]).elem2})));
    safeTokenTransfer(_svs.v3507, _svs.v3506, _f.v4369);
    emit _reach_oe_v4379( (true));
    _Memory._reachr_User_claim = (true);
    _f.v4396._adminClaimed = true;
    _f.v4396._bal = ((_f.v4378[uint256(0)]).elem0);
    _f.v4396._buyers = (_svs.v3556._buyers);
    _f.v4396._claimed = true;
    _f.v4396._currentUserNumber = (_svs.v3556._currentUserNumber);
    _f.v4396._keepGoing = false;
    _f.v4396._percent = (_svs.v3556._percent);
    _f.v4396._raffleBal = uint256(0);
    _f.v4396._winner = (_svs.v3556._winner);
    T14  memory _ja;
    _ja.elem0 = _svs.v3506;
    _ja.elem1 = _svs.v3507;
    _ja.elem2 = _svs.v3508;
    _ja.elem3 = _svs.v3509;
    _ja.elem4 = _svs.v3510;
    _ja.elem5 = _svs.v3511;
    _ja.elem6 = _svs.v3513;
    _ja.elem7 = _svs.v3514;
    _ja.elem8 = _svs.v3515;
    _ja.elem9 = _svs.v3516;
    _ja.elem10 = _svs.v3547;
    _ja.elem11 = _f.v4396;
    _ja.elem12 = uint256(block.number);
    _ja.elem13 = uint256(block.timestamp);
    _ja.elem14 = _f.v4378;
    _ja.elem15 = _svs.v3564;
    _reachl_2(_ja, _Memory);
    } else if ((_a.elem1).which == _enum_T10.User_delete0_273) {
    reachRequire((((payable(msg.sender) == _svs.v3506) ? true : (payable(msg.sender) == _svs.v3516))), uint256(49) /*'(reach standard library:57:5:application,[at ./raffle_token_v4.rsh:278:12:application call to "check" (defined at: reach standard library:49:32:function exp),at ./raffle_token_v4.rsh:277:27:application call to [unknown function] (defined at: ./raffle_token_v4.rsh:277:27:function exp),at ./raffle_token_v4.rsh:124:37:application call to [unknown function] (defined at: ./raffle_token_v4.rsh:277:27:function exp),at ./raffle_token_v4.rsh:124:37:application call to [unknown function] (defined at: ./raffle_token_v4.rsh:124:37:function exp),at ./raffle_token_v4.rsh:138:14:application call to [unknown function] (defined at: ./raffle_token_v4.rsh:138:14:function exp)],Just "Don't have administrative rights to perform action")'*/);
    reachRequire((_svs.v3586), uint256(50) /*'(reach standard library:57:5:application,[at ./raffle_token_v4.rsh:282:12:application call to "check" (defined at: reach standard library:49:32:function exp),at ./raffle_token_v4.rsh:277:27:application call to [unknown function] (defined at: ./raffle_token_v4.rsh:277:27:function exp),at ./raffle_token_v4.rsh:124:37:application call to [unknown function] (defined at: ./raffle_token_v4.rsh:277:27:function exp),at ./raffle_token_v4.rsh:124:37:application call to [unknown function] (defined at: ./raffle_token_v4.rsh:124:37:function exp),at ./raffle_token_v4.rsh:138:14:application call to [unknown function] (defined at: ./raffle_token_v4.rsh:138:14:function exp)],Just "Impossibe command, seeing as the deadline has not reached")'*/);
    reachRequire((((_svs.v3556._currentUserNumber) == uint256(0))), uint256(51) /*'(reach standard library:57:5:application,[at ./raffle_token_v4.rsh:286:12:application call to "check" (defined at: reach standard library:49:32:function exp),at ./raffle_token_v4.rsh:277:27:application call to [unknown function] (defined at: ./raffle_token_v4.rsh:277:27:function exp),at ./raffle_token_v4.rsh:124:37:application call to [unknown function] (defined at: ./raffle_token_v4.rsh:277:27:function exp),at ./raffle_token_v4.rsh:124:37:application call to [unknown function] (defined at: ./raffle_token_v4.rsh:124:37:function exp),at ./raffle_token_v4.rsh:138:14:application call to [unknown function] (defined at: ./raffle_token_v4.rsh:138:14:function exp)],Just "Can only delete when nobody used contract")'*/);
    reachRequire((msg.value == uint256(0)), uint256(52) /*'(./raffle_token_v4.rsh:124:37:dot,[],"verify network token pay amount")'*/);
    reachRequire((checkPayAmt(msg.sender, _svs.v3507, uint256(0))), uint256(53) /*'(./raffle_token_v4.rsh:124:37:dot,[],"verify non-network token pay amount")'*/);
    reachRequire((checkPayAmt(msg.sender, _svs.v3513, uint256(0))), uint256(54) /*'(./raffle_token_v4.rsh:124:37:dot,[],"verify non-network token pay amount")'*/);
    emit _reach_oe_v4734( (true));
    _Memory._reachr_User_delete = (true);
    safeTokenTransfer(_svs.v3513, _svs.v3506, ((_svs.v3563[uint256(1)]).elem0));
    _f.v4760._adminClaimed = (_svs.v3556._adminClaimed);
    _f.v4760._bal = _svs.v3596;
    _f.v4760._buyers = (_svs.v3556._buyers);
    _f.v4760._claimed = true;
    _f.v4760._currentUserNumber = (_svs.v3556._currentUserNumber);
    _f.v4760._keepGoing = false;
    _f.v4760._percent = (_svs.v3556._percent);
    _f.v4760._raffleBal = _svs.v3597;
    _f.v4760._winner = (_svs.v3556._winner);
    T14  memory _ja;
    _ja.elem0 = _svs.v3506;
    _ja.elem1 = _svs.v3507;
    _ja.elem2 = _svs.v3508;
    _ja.elem3 = _svs.v3509;
    _ja.elem4 = _svs.v3510;
    _ja.elem5 = _svs.v3511;
    _ja.elem6 = _svs.v3513;
    _ja.elem7 = _svs.v3514;
    _ja.elem8 = _svs.v3515;
    _ja.elem9 = _svs.v3516;
    _ja.elem10 = _svs.v3547;
    _ja.elem11 = _f.v4760;
    _ja.elem12 = uint256(block.number);
    _ja.elem13 = uint256(block.timestamp);
    _ja.elem14 = (array_set6(_svs.v3563, uint256(1), (T5({elem0: (unsafeSub(((_svs.v3563[uint256(1)]).elem0), ((_svs.v3563[uint256(1)]).elem0))), elem1: (_svs.v3563[uint256(1)]).elem1, elem2: (_svs.v3563[uint256(1)]).elem2}))));
    _ja.elem15 = _svs.v3564;
    _reachl_2(_ja, _Memory);
    } else if ((_a.elem1).which == _enum_T10.User_determinWinnerAfterDeadline0_273) {
    _f.v4827 = (_a.elem1)._User_determinWinnerAfterDeadline0_273;
    reachRequire((((uint256((_svs.v3556._winner).which)) == uint256(0))), uint256(55) /*'(reach standard library:57:5:application,[at ./raffle_token_v4.rsh:227:12:application call to "check" (defined at: reach standard library:49:32:function exp),at ./raffle_token_v4.rsh:224:54:application call to [unknown function] (defined at: ./raffle_token_v4.rsh:224:54:function exp),at ./raffle_token_v4.rsh:124:37:application call to [unknown function] (defined at: ./raffle_token_v4.rsh:224:54:function exp),at ./raffle_token_v4.rsh:124:37:application call to [unknown function] (defined at: ./raffle_token_v4.rsh:124:37:function exp),at ./raffle_token_v4.rsh:138:14:application call to [unknown function] (defined at: ./raffle_token_v4.rsh:138:14:function exp)],Just "Winner has not been determined")'*/);
    reachRequire((_svs.v3586), uint256(56) /*'(reach standard library:57:5:application,[at ./raffle_token_v4.rsh:228:12:application call to "check" (defined at: reach standard library:49:32:function exp),at ./raffle_token_v4.rsh:224:54:application call to [unknown function] (defined at: ./raffle_token_v4.rsh:224:54:function exp),at ./raffle_token_v4.rsh:124:37:application call to [unknown function] (defined at: ./raffle_token_v4.rsh:224:54:function exp),at ./raffle_token_v4.rsh:124:37:application call to [unknown function] (defined at: ./raffle_token_v4.rsh:124:37:function exp),at ./raffle_token_v4.rsh:138:14:application call to [unknown function] (defined at: ./raffle_token_v4.rsh:138:14:function exp)],Just "Impossibe command, seeing as the deadline has not reached")'*/);
    reachRequire(((payable(msg.sender) == _svs.v3516)), uint256(57) /*'(reach standard library:57:5:application,[at ./raffle_token_v4.rsh:232:12:application call to "check" (defined at: reach standard library:49:32:function exp),at ./raffle_token_v4.rsh:224:54:application call to [unknown function] (defined at: ./raffle_token_v4.rsh:224:54:function exp),at ./raffle_token_v4.rsh:124:37:application call to [unknown function] (defined at: ./raffle_token_v4.rsh:224:54:function exp),at ./raffle_token_v4.rsh:124:37:application call to [unknown function] (defined at: ./raffle_token_v4.rsh:124:37:function exp),at ./raffle_token_v4.rsh:138:14:application call to [unknown function] (defined at: ./raffle_token_v4.rsh:138:14:function exp)],Just "You cannot perform this action")'*/);
    reachRequire((msg.value == uint256(0)), uint256(58) /*'(./raffle_token_v4.rsh:124:37:dot,[],"verify network token pay amount")'*/);
    reachRequire((checkPayAmt(msg.sender, _svs.v3507, uint256(0))), uint256(59) /*'(./raffle_token_v4.rsh:124:37:dot,[],"verify non-network token pay amount")'*/);
    reachRequire((checkPayAmt(msg.sender, _svs.v3513, uint256(0))), uint256(60) /*'(./raffle_token_v4.rsh:124:37:dot,[],"verify non-network token pay amount")'*/);
    reachRequire(((uint256(block.timestamp) >= _svs.v3547)), uint256(61) /*'(reach standard library:57:5:application,[at ./raffle_token_v4.rsh:228:12:application call to "check" (defined at: reach standard library:49:32:function exp),at ./raffle_token_v4.rsh:235:13:application call to [unknown function] (defined at: ./raffle_token_v4.rsh:235:13:function exp)],Just "Impossibe command, seeing as the deadline has not reached")'*/);
    _f.v5103 = safeDiv((safeMul(_svs.v3599, uint256(5))), uint256(100));
    _f.v5112 = array_set6(_svs.v3563, uint256(0), (T5({elem0: (unsafeSub(_svs.v3599, _f.v5103)), elem1: _svs.v3598.elem1, elem2: _svs.v3598.elem2})));
    safeTokenTransfer(_svs.v3507, _svs.v3516, _f.v5103);
    _f.v5123 = array_set6(_f.v5112, uint256(0), (T5({elem0: (unsafeSub(((_f.v5112[uint256(0)]).elem0), ((_f.v5112[uint256(0)]).elem0))), elem1: (_f.v5112[uint256(0)]).elem1, elem2: (_f.v5112[uint256(0)]).elem2})));
    safeTokenTransfer(_svs.v3507, _svs.v3506, ((_f.v5112[uint256(0)]).elem0));
    emit _reach_oe_v5124( (false));
    _Memory._reachr_User_determinWinnerAfterDeadline = (false);
    _f.v5142.which = _enum_T2.Some;
    _f.v5142._Some = (_f.v4827.elem0);
    _f.v5143._adminClaimed = true;
    _f.v5143._bal = ((_f.v5123[uint256(0)]).elem0);
    _f.v5143._buyers = (_svs.v3556._buyers);
    _f.v5143._claimed = (_svs.v3556._claimed);
    _f.v5143._currentUserNumber = (_svs.v3556._currentUserNumber);
    _f.v5143._keepGoing = (_svs.v3556._keepGoing);
    _f.v5143._percent = (_svs.v3556._percent);
    _f.v5143._raffleBal = _svs.v3597;
    _f.v5143._winner = _f.v5142;
    T14  memory _ja;
    _ja.elem0 = _svs.v3506;
    _ja.elem1 = _svs.v3507;
    _ja.elem2 = _svs.v3508;
    _ja.elem3 = _svs.v3509;
    _ja.elem4 = _svs.v3510;
    _ja.elem5 = _svs.v3511;
    _ja.elem6 = _svs.v3513;
    _ja.elem7 = _svs.v3514;
    _ja.elem8 = _svs.v3515;
    _ja.elem9 = _svs.v3516;
    _ja.elem10 = _svs.v3547;
    _ja.elem11 = _f.v5143;
    _ja.elem12 = uint256(block.number);
    _ja.elem13 = uint256(block.timestamp);
    _ja.elem14 = _f.v5123;
    _ja.elem15 = _svs.v3564;
    _reachl_2(_ja, _Memory);
    } else if ((_a.elem1).which == _enum_T10.User_optin0_273) {
    reachRequire((msg.value == uint256(0)), uint256(62) /*'(./raffle_token_v4.rsh:124:37:dot,[],"verify network token pay amount")'*/);
    reachRequire((checkPayAmt(msg.sender, _svs.v3507, uint256(0))), uint256(63) /*'(./raffle_token_v4.rsh:124:37:dot,[],"verify non-network token pay amount")'*/);
    reachRequire((checkPayAmt(msg.sender, _svs.v3513, uint256(0))), uint256(64) /*'(./raffle_token_v4.rsh:124:37:dot,[],"verify non-network token pay amount")'*/);
    emit _reach_oe_v5473( (false));
    _Memory._reachr_User_optin = (false);
    T14  memory _ja;
    _ja.elem0 = _svs.v3506;
    _ja.elem1 = _svs.v3507;
    _ja.elem2 = _svs.v3508;
    _ja.elem3 = _svs.v3509;
    _ja.elem4 = _svs.v3510;
    _ja.elem5 = _svs.v3511;
    _ja.elem6 = _svs.v3513;
    _ja.elem7 = _svs.v3514;
    _ja.elem8 = _svs.v3515;
    _ja.elem9 = _svs.v3516;
    _ja.elem10 = _svs.v3547;
    _ja.elem11 = _svs.v3556;
    _ja.elem12 = uint256(block.number);
    _ja.elem13 = uint256(block.timestamp);
    _ja.elem14 = _svs.v3563;
    _ja.elem15 = _svs.v3564;
    _reachl_2(_ja, _Memory);
    }
    }
  function _reachl_2(T14 memory _a, Memory memory _Memory) internal  {
    if (((_a.elem11._keepGoing) ? ((_a.elem11._claimed) ? false : true) : false)) {
      T7 memory nsvs;
      nsvs.v3506 = _a.elem0;
      nsvs.v3507 = _a.elem1;
      nsvs.v3508 = _a.elem2;
      nsvs.v3509 = _a.elem3;
      nsvs.v3510 = _a.elem4;
      nsvs.v3511 = _a.elem5;
      nsvs.v3513 = _a.elem6;
      nsvs.v3514 = _a.elem7;
      nsvs.v3515 = _a.elem8;
      nsvs.v3516 = _a.elem9;
      nsvs.v3547 = _a.elem10;
      nsvs.v3556 = _a.elem11;
      nsvs.v3560 = _a.elem13;
      nsvs.v3563 = _a.elem14;
      nsvs.v3564 = _a.elem15;
      nsvs.v3586 = (_a.elem13 >= _a.elem10);
      nsvs.v3596 = (_a.elem11._bal);
      nsvs.v3597 = (_a.elem11._raffleBal);
      nsvs.v3598 = (_a.elem14[uint256(0)]);
      nsvs.v3599 = ((_a.elem14[uint256(0)]).elem0);
      current_step = uint256(4);
      current_time = uint256(block.number);
      current_svbs = abi.encode(nsvs);
      }
    else {
      _a.elem9.transfer(_a.elem15);
      safeTokenTransfer(_a.elem1, _a.elem9, ((_a.elem14[uint256(0)]).elem0));
      safeTokenTransfer(_a.elem6, _a.elem0, (((array_set6(_a.elem14, uint256(0), (T5({elem0: (unsafeSub(((_a.elem14[uint256(0)]).elem0), ((_a.elem14[uint256(0)]).elem0))), elem1: (_a.elem14[uint256(0)]).elem1, elem2: (_a.elem14[uint256(0)]).elem2}))))[uint256(1)]).elem0));
      current_step = 0x0;
      current_time = 0x0;
      delete current_svbs;
      }
    }
  function Info_adminClaimed() external view returns (bool) {
    Memory memory _Memory;
    bool  _ja;
    _reacha_Info_adminClaimed(_ja, _Memory);
    return _Memory._reachr_Info_adminClaimed;
    }
  function Info_balance() external view returns (uint256) {
    Memory memory _Memory;
    bool  _ja;
    _reacha_Info_balance(_ja, _Memory);
    return _Memory._reachr_Info_balance;
    }
  function Info_currentSec() external view returns (uint256) {
    Memory memory _Memory;
    bool  _ja;
    _reacha_Info_currentSec(_ja, _Memory);
    return _Memory._reachr_Info_currentSec;
    }
  function Info_currentTime() external view returns (uint256) {
    Memory memory _Memory;
    bool  _ja;
    _reacha_Info_currentTime(_ja, _Memory);
    return _Memory._reachr_Info_currentTime;
    }
  function Info_hasDeadlineReached() external view returns (bool) {
    Memory memory _Memory;
    bool  _ja;
    _reacha_Info_hasDeadlineReached(_ja, _Memory);
    return _Memory._reachr_Info_hasDeadlineReached;
    }
  function Info_myTicketsAmount(address payable v7218) external view returns (uint256) {
    Memory memory _Memory;
    _reacha_Info_myTicketsAmount(v7218, _Memory);
    return _Memory._reachr_Info_myTicketsAmount;
    }
  function Info_opted(address payable v7222) external view returns (bool) {
    Memory memory _Memory;
    _reacha_Info_opted(v7222, _Memory);
    return _Memory._reachr_Info_opted;
    }
  function Info_props() external view returns (T1 memory) {
    Memory memory _Memory;
    bool  _ja;
    _reacha_Info_props(_ja, _Memory);
    return _Memory._reachr_Info_props;
    }
  function Info_randomNumber() external view returns (uint256) {
    Memory memory _Memory;
    bool  _ja;
    _reacha_Info_randomNumber(_ja, _Memory);
    return _Memory._reachr_Info_randomNumber;
    }
  function Info_ticketsBought() external view returns (uint256) {
    Memory memory _Memory;
    bool  _ja;
    _reacha_Info_ticketsBought(_ja, _Memory);
    return _Memory._reachr_Info_ticketsBought;
    }
  function Info_token() external view returns (address payable) {
    Memory memory _Memory;
    bool  _ja;
    _reacha_Info_token(_ja, _Memory);
    return _Memory._reachr_Info_token;
    }
  function Info_userClaimed() external view returns (bool) {
    Memory memory _Memory;
    bool  _ja;
    _reacha_Info_userClaimed(_ja, _Memory);
    return _Memory._reachr_Info_userClaimed;
    }
  function Info_winner() external view returns (T2 memory) {
    Memory memory _Memory;
    bool  _ja;
    _reacha_Info_winner(_ja, _Memory);
    return _Memory._reachr_Info_winner;
    }
  function User_buyTicket(uint256 v7240) external payable returns (bool) {
    Memory memory _Memory;
    _reacha_User_buyTicket(v7240, _Memory);
    return _Memory._reachr_User_buyTicket;
    }
  function User_claim() external payable returns (bool) {
    Memory memory _Memory;
    bool  _ja;
    _reacha_User_claim(_ja, _Memory);
    return _Memory._reachr_User_claim;
    }
  function User_delete() external payable returns (bool) {
    Memory memory _Memory;
    bool  _ja;
    _reacha_User_delete(_ja, _Memory);
    return _Memory._reachr_User_delete;
    }
  function User_determinWinnerAfterDeadline(address payable v7254) external payable returns (bool) {
    Memory memory _Memory;
    _reacha_User_determinWinnerAfterDeadline(v7254, _Memory);
    return _Memory._reachr_User_determinWinnerAfterDeadline;
    }
  function User_optin() external payable returns (bool) {
    Memory memory _Memory;
    bool  _ja;
    _reacha_User_optin(_ja, _Memory);
    return _Memory._reachr_User_optin;
    }
  constructor(T12 memory v7261) payable {
    current_step = 0x0;
    creation_time = uint256(block.number);
    Memory memory _Memory;
    _reachi_0(v7261, _Memory);
    }
  function _reachp_1(T8 calldata v7264) external payable returns (bool) {
    Memory memory _Memory;
    _reachi_1(v7264, _Memory);
    }
  function _reachp_3(T11 calldata v7267) external payable returns (bool) {
    Memory memory _Memory;
    _reachi_3(v7267, _Memory);
    }
  }
